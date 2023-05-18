package com.ftn.sbnz.backward.service.service;

import com.ftn.sbnz.backward.model.models.hotel.Hotel;
import com.ftn.sbnz.backward.service.dto.HotelResponse;
import com.ftn.sbnz.backward.service.dto.SearchHotelsParams;
import com.ftn.sbnz.backward.service.repository.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class HotelsService {
    @Autowired
    private HotelRepository hotelRepository;

    public List<HotelResponse> searchHotels(SearchHotelsParams searchHotelsParams) {
        List<HotelResponse> hotels = new ArrayList<>();
        for(Hotel h : hotelRepository.findAll()) {
            hotels.add(new HotelResponse(h));
        }
        return hotels;
    }

    public void save(Hotel hotel) {
        hotelRepository.save(hotel);
    }

    public Hotel findById(Long hotelId) {
        Optional<Hotel> hotel = hotelRepository.findById(hotelId);
        return hotel.orElse(null);
    }
}
