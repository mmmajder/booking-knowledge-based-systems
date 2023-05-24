package com.ftn.sbnz.backward.service.dto;

import com.ftn.sbnz.backward.model.models.flight.SeatClass;
import lombok.Data;

import java.util.List;

@Data
public class FlightPriceRequest {
    private List<Long> flightIds;
    private int numberOfAdults;
    private int numberOfChildren;
    private SeatClass seatClass;
}
