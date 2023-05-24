package com.ftn.sbnz.backward.service.dto;

import com.ftn.sbnz.backward.model.models.flight.Airport;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.Instant;
import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class FlightResponse {

    private Instant fromDate;
    private Instant toDate;
    private Airport startAirport;
    private Airport endAirport;
    private int numberOfStops;
    private List<String> airlines;
}
