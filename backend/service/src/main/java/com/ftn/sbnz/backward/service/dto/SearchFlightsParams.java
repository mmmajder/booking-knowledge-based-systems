package com.ftn.sbnz.backward.service.dto;

import com.ftn.sbnz.backward.model.models.flight.NumberOfStops;
import com.ftn.sbnz.backward.model.models.flight.SeatClass;
import lombok.*;

import java.time.Instant;
import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
public class SearchFlightsParams {
    private SeatClass seatClass;
    private String from;
    private String to;
    private int numberOfChildren;
    private int numberOfAdults;
    private NumberOfStops selectedNumberOfStops;
    private boolean returnTicket;
    private Instant singleDate;
    private Instant dateRangeStart;
    private Instant dateRangeEnd;
}
