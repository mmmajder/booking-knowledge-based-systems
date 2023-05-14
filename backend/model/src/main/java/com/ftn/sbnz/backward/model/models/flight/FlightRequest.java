package com.ftn.sbnz.backward.model.models.flight;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.kie.api.definition.type.Position;

import java.time.Instant;
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

    @Override
    public String toString() {
        return "FlightRequest{" +
                "departureAirport=" + departureAirport +
                ", arrivalAirport=" + arrivalAirport +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        FlightRequest that = (FlightRequest) o;
        return Objects.equals(departureAirport, that.departureAirport) && Objects.equals(arrivalAirport, that.arrivalAirport);
    }

    @Override
    public int hashCode() {
        return Objects.hash(departureAirport, arrivalAirport);
    }
}
