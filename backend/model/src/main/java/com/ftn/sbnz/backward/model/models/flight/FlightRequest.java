package com.ftn.sbnz.backward.model.models.flight;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.kie.api.definition.type.Position;

import java.time.Instant;
import java.util.List;
import java.util.Objects;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class FlightRequest {
    @Position(0)
    private Airport departureAirport;
    @Position(1)
    private Airport arrivalAirport;

    @Position(2)
    private Instant departureTime;
//
//    @Position(3)
//    private List<List<Flight>> connectedFlights;
}
