package com.ftn.sbnz.backward.service.controllers;

import com.ftn.sbnz.backward.model.models.hotel.HotelResponse;
import com.ftn.sbnz.backward.model.models.hotel.ReserveHotelParams;
import com.ftn.sbnz.backward.model.models.hotel.ReviewHotelParams;
import com.ftn.sbnz.backward.model.models.hotel.SearchHotelsParams;
import com.ftn.sbnz.backward.service.dto.PropertyDetailsResponse;
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

    @GetMapping("/popular")
    public List<HotelResponse> popularHotels() {
        return hotelsService.getPopularHotels();
    }

    @GetMapping("/{id}")
    public PropertyDetailsResponse getHotel(@PathVariable Long id) {
        return hotelsService.getHotel(id);
    }

    @PostMapping("/review")
    public void reviewHotel(@RequestBody ReviewHotelParams reviewHotelParams) {
        hotelsService.reviewHotel(reviewHotelParams);
    }

    @PostMapping("/reserve")
    public boolean reserveHotel(@RequestBody ReserveHotelParams reserveHotelParams) {
        return hotelsService.reserveHotel(reserveHotelParams);
    }

}
