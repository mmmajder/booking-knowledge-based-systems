package com.ftn.sbnz.backward.service.controllers;

import com.ftn.sbnz.backward.service.dto.FlightResponse;
import com.ftn.sbnz.backward.service.dto.HotelResponse;
import com.ftn.sbnz.backward.service.dto.SearchFlightsParams;
import com.ftn.sbnz.backward.service.dto.SearchHotelsParams;
import com.ftn.sbnz.backward.service.service.FlightService;
import com.ftn.sbnz.backward.service.service.HotelsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/flights")
public class FlightController {

    @Autowired
    private FlightService flightService;

    @PostMapping()
    public List<FlightResponse> searchFlights(@RequestBody SearchFlightsParams searchFlightsParams) {
        return flightService.searchFlights(searchFlightsParams);
    }
}
