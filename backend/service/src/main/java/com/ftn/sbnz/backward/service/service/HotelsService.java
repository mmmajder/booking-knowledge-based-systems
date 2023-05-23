package com.ftn.sbnz.backward.service.service;

import com.ftn.sbnz.backward.model.models.hotel.*;
import com.ftn.sbnz.backward.service.dto.HotelResponse;
import com.ftn.sbnz.backward.service.dto.PropertyDetailsResponse;
import com.ftn.sbnz.backward.service.repository.*;
import org.kie.api.KieServices;
import org.kie.api.runtime.KieContainer;
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
    private HotelOccupancyRepository hotelOccupancyRepository;

    public List<HotelResponse> searchHotels(SearchHotelsParams searchHotelsParams) {
        KieServices ks = KieServices.Factory.get();
        KieContainer kc = ks.newKieClasspathContainer();
        KieSession ksession = kc.newKieSession("searchhotelssession");

        List<Hotel> filteredHotels = new ArrayList<>();
        ksession.setGlobal("filteredHotels", filteredHotels);

        for (Hotel h : hotelRepository.findAll()) {
            ksession.insert(h);
        }

        ksession.insert(searchHotelsParams);
        ksession.fireAllRules();

        List<HotelResponse> hotelResponses = new ArrayList<>();
        for (Hotel h : filteredHotels) {
            hotelResponses.add(new HotelResponse(h));
        }

        ksession.dispose();
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
        return new PropertyDetailsResponse(findById(id));
    }

    public void reviewHotel(ReviewHotelParams reviewHotelParams) {
        Review review = new Review();
        review.setUser(userRepository.findByEmail(reviewHotelParams.getUserEmail()).get());
        review.setRating(reviewHotelParams.getStars());
        review.setComment(reviewHotelParams.getComment());
        review.setPosted(new Date());
        reviewRepository.save(review);

        Hotel hotel = findById(reviewHotelParams.getHotelId());
        hotel.getReviews().add(review);
        hotelRepository.save(hotel);
    }

    public boolean reserveHotel(ReserveHotelParams reserveHotelParams) {
        // GET FROM RULE SOMEHOW
        HotelRoom hotelRoom = new HotelRoom();

        RoomOccupancy roomOccupancy = new RoomOccupancy();
        roomOccupancy.setRoom(hotelRoom);
        roomOccupancy.setStart(reserveHotelParams.getStart());
        roomOccupancy.setEnd(reserveHotelParams.getEnd());
        roomOccupancyRepository.save(roomOccupancy);

        HotelOccupancy hotelOccupancy = hotelOccupancyRepository.findByHotelRoom_Id(hotelRoom.getId());
        hotelOccupancy.getOccupancies().add(roomOccupancy);
        hotelOccupancyRepository.save(hotelOccupancy);

        return true;
    }
}
