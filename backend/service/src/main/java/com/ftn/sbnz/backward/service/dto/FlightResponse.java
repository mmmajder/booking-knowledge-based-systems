package com.ftn.sbnz.backward.service.dto;

import com.ftn.sbnz.backward.model.models.flight.Airport;

import java.util.Date;
import java.util.List;

public class FlightResponse {

    private Date fromDate;
    private Date toDate;
    private Airport startAirport;
    private Airport endAirport;
    private int numberOfStops;
    private List<String> airlines;
}
