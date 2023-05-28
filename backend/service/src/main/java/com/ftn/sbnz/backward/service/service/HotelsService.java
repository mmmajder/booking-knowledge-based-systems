package com.ftn.sbnz.backward.service.service;

import com.ftn.sbnz.backward.model.models.User;
import com.ftn.sbnz.backward.model.models.hotel.*;
import com.ftn.sbnz.backward.service.dto.HotelResponse;
import com.ftn.sbnz.backward.service.dto.PropertyDetailsResponse;
import com.ftn.sbnz.backward.service.repository.*;
import org.kie.api.runtime.KieSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class HotelsService {
    @Autowired
    private HotelRepository hotelRepository;
    @Autowired
    private ReviewRepository reviewRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoomOccupancyRepository roomOccupancyRepository;
    @Autowired
    private HotelRoomRepository hotelRoomRepository;
    @Autowired
    private KieSession hotelsKieSession;

    public List<HotelResponse> searchHotels(SearchHotelsParams searchHotelsParams) {
        List<Hotel> filteredHotels = new ArrayList<>();
        hotelsKieSession.setGlobal("filteredHotels", filteredHotels);

        hotelsKieSession.insert(searchHotelsParams);
        hotelsKieSession.fireAllRules();

        List<HotelResponse> hotelResponses = new ArrayList<>();
        for (Hotel h : filteredHotels) {
            hotelResponses.add(new HotelResponse(h));
        }

        return hotelResponses;
    }

    public void save(Hotel hotel) {
        hotelRepository.save(hotel);
    }

    public Hotel findById(Long hotelId) {
        Optional<Hotel> hotel = hotelRepository.findById(hotelId);
        return hotel.orElse(null);
    }

    public PropertyDetailsResponse getHotel(Long id) {
        Hotel hotel = findById(id);
        hotelsKieSession.insert(new HotelEvent(hotel, HotelEventType.VIEW, null));
        hotelsKieSession.fireAllRules();
        return new PropertyDetailsResponse(hotel);
    }

    public void reviewHotel(ReviewHotelParams reviewHotelParams) {
        User user = userRepository.findByEmail(reviewHotelParams.getUserEmail()).get();

        Review review = new Review();
        review.setUser(user);
        review.setRating(reviewHotelParams.getStars());
        review.setComment(reviewHotelParams.getComment());
        review.setPosted(new Date());
        reviewRepository.save(review);

        Hotel hotel = findById(reviewHotelParams.getHotelId());
        hotel.getReviews().add(review);
        hotelRepository.save(hotel);

        HotelEventType type = review.getRating() > 3 ? HotelEventType.POSITIVE_REVIEW : HotelEventType.NEGATIVE_REVIEW;
        hotelsKieSession.insert(new HotelEvent(hotel, type, user));
        hotelsKieSession.fireAllRules();
    }

    public boolean reserveHotel(ReserveHotelParams reserveHotelParams) {
        Hotel hotel = findById(reserveHotelParams.getHotelId());
        CheckRoomAvailability roomAvailability = new CheckRoomAvailability(hotel, reserveHotelParams, null);
        hotelsKieSession.insert(roomAvailability);

        HotelRoom room = roomAvailability.getHotelRoom();
        if (room == null)
            return false;

        RoomOccupancy roomOccupancy = new RoomOccupancy();
        roomOccupancy.setStartDate(reserveHotelParams.getStart());
        roomOccupancy.setEndDate(reserveHotelParams.getEnd());
        roomOccupancyRepository.save(roomOccupancy);

        if (room.getRoomOccupancies() == null)
            room.setRoomOccupancies(new ArrayList<>());
        room.getRoomOccupancies().add(roomOccupancy);
        hotelRoomRepository.save(room);

        hotelsKieSession.insert(new HotelEvent(hotel, HotelEventType.RESERVATION, null));
        return true;
    }

    public List<HotelResponse> getPopularHotels() {
        ReloadPopularHotelsEvent event = new ReloadPopularHotelsEvent();
        hotelsKieSession.insert(event);
        hotelsKieSession.fireAllRules();

        List<HotelResponse> hotelResponses = new ArrayList<>();

        for (Hotel h : event.getHotels()) {
            hotelResponses.add(new HotelResponse(h));
        }
        if (hotelResponses.size() > 10)
            return hotelResponses.subList(0, 10);
        return hotelResponses;
    }
}
