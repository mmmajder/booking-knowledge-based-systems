package com.ftn.sbnz.backward.service.service;

import com.ftn.sbnz.backward.service.dto.PropertyResponse;
import com.ftn.sbnz.backward.service.dto.SearchHotelsParams;
import com.ftn.sbnz.backward.service.repository.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class HotelsService {
    @Autowired
    private HotelRepository hotelRepository;

    public List<PropertyResponse> searchHotels(SearchHotelsParams searchHotelsParams) {
        return new ArrayList<PropertyResponse>();
    }
}
