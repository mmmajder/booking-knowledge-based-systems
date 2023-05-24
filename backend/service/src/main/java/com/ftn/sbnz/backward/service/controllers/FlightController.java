package com.ftn.sbnz.backward.service.controllers;

import com.ftn.sbnz.backward.model.models.flight.Flight;
import com.ftn.sbnz.backward.service.dto.FlightBasePriceResponse;
import com.ftn.sbnz.backward.service.dto.FlightPriceRequest;
import com.ftn.sbnz.backward.service.dto.SearchFlightsParams;
import com.ftn.sbnz.backward.service.service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.Authentication;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/flights")
public class FlightController {

    @Autowired
    private FlightService flightService;

    @PostMapping()
    public List<List<Flight>> searchFlights(@RequestBody SearchFlightsParams searchFlightsParams) {
        return flightService.searchFlights(searchFlightsParams);
    }

    @PostMapping("/base-price")
    public List<FlightBasePriceResponse> getFlightBasePrices(@RequestBody FlightPriceRequest flightPriceRequest, Authentication authentication) {
        return flightService.getFlightBasePrices(flightPriceRequest, authentication);
    }
}
