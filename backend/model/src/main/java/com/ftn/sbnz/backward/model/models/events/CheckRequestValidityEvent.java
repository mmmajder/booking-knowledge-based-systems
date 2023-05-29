package com.ftn.sbnz.backward.model.models.events;

import com.ftn.sbnz.backward.model.models.Customer;
import com.ftn.sbnz.backward.model.models.flight.Flight;
import com.ftn.sbnz.backward.model.models.flight.PlaneSeat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.kie.api.definition.type.Expires;
import org.kie.api.definition.type.Role;
import org.kie.api.definition.type.Timestamp;

import java.util.Date;
import java.util.List;
import java.util.Objects;

@Role(Role.Type.EVENT)
@Timestamp("executionTime")
@Expires("2h30m")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CheckRequestValidityEvent {
    private List<List<PlaneSeat>> seats;
    private List<Flight> flights;
    private Date executionTime;
    private boolean seatsValid;
    private boolean moneyValid;
    private Customer customer;
    private double totalPrice;
    private boolean isAccepted;
    private FlightPaymentRequestEvent flightPaymentRequestEvent;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CheckRequestValidityEvent that = (CheckRequestValidityEvent) o;
        return seatsValid == that.seatsValid && moneyValid == that.moneyValid && Double.compare(that.totalPrice, totalPrice) == 0 && isAccepted == that.isAccepted && Objects.equals(seats, that.seats) && Objects.equals(flights, that.flights) && Objects.equals(executionTime, that.executionTime) && Objects.equals(customer, that.customer) && Objects.equals(flightPaymentRequestEvent, that.flightPaymentRequestEvent);
    }

    @Override
    public int hashCode() {
        return Objects.hash(seats, flights, executionTime, seatsValid, moneyValid, customer, totalPrice, isAccepted, flightPaymentRequestEvent);
    }
}
