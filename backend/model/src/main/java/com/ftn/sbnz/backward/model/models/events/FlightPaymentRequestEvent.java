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

import javax.persistence.Entity;
import java.util.Date;
import java.util.List;
import java.util.Objects;

@Role(Role.Type.EVENT)
@Timestamp("executionTime")
@Expires("2h30m")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class FlightPaymentRequestEvent {
    private Long id;
    private List<Flight> flights;
    private Customer customer;
    private boolean isRequested;
    private boolean isAccepted;
    private Date executionTime;
    private double totalPrice;
    private List<List<PlaneSeat>> seats;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        FlightPaymentRequestEvent that = (FlightPaymentRequestEvent) o;
        return isRequested == that.isRequested && isAccepted == that.isAccepted && Double.compare(that.totalPrice, totalPrice) == 0 && Objects.equals(flights, that.flights) && Objects.equals(customer, that.customer) && Objects.equals(executionTime, that.executionTime) && Objects.equals(seats, that.seats);
    }

    @Override
    public int hashCode() {
        return Objects.hash(flights, customer, isRequested, isAccepted, executionTime, totalPrice, seats);
    }
}
