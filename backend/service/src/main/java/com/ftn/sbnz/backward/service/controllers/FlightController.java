package com.ftn.sbnz.backward.service.controllers;

import com.ftn.sbnz.backward.model.models.events.AdditionalServicesRequestEvent;
import com.ftn.sbnz.backward.model.models.events.FlightPaymentRequestEvent;
import com.ftn.sbnz.backward.model.models.flight.Flight;
import com.ftn.sbnz.backward.service.dto.FlightBasePriceResponse;
import com.ftn.sbnz.backward.service.dto.FlightPriceRequest;
import com.ftn.sbnz.backward.service.dto.ReserveFlightRequest;
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

    @PostMapping("/additional-services")
    public List<AdditionalServicesRequestEvent> getAdditionalServicesPrice(@RequestBody List<AdditionalServicesRequestEvent> additionalServicesRequestEvent, Authentication authentication) {
        return flightService.getAdditionalServicesPrice(additionalServicesRequestEvent, authentication);
    }

    @GetMapping("/grand-total-price")
    public double getGrandTotalPrice() {
        return flightService.getGrandTotalPrice();
    }

    @PostMapping("/reserve")
    public boolean reserve(@RequestBody FlightPaymentRequestEvent reserveFlightRequest) {
        return flightService.reserve(reserveFlightRequest);
    }
}
