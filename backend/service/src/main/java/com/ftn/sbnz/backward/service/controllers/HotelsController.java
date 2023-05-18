package com.ftn.sbnz.backward.service.controllers;

import com.ftn.sbnz.backward.service.dto.HotelResponse;
import com.ftn.sbnz.backward.service.dto.SearchHotelsParams;
import com.ftn.sbnz.backward.service.service.HotelsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/hotels")
public class HotelsController {
    @Autowired
    private HotelsService hotelsService;

    @PostMapping()
    public List<HotelResponse> searchHotels(@RequestBody SearchHotelsParams searchHotelsParams) {
        return hotelsService.searchHotels(searchHotelsParams);
    }

}
