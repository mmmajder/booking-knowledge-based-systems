package com.ftn.sbnz.backward.model.models.events;

import com.ftn.sbnz.backward.model.models.Customer;
import com.ftn.sbnz.backward.model.models.flight.Flight;
import com.ftn.sbnz.backward.model.models.flight.SeatClass;
import com.ftn.sbnz.backward.model.models.flight.price.BasePrice;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.kie.api.definition.type.Expires;
import org.kie.api.definition.type.Role;
import org.kie.api.definition.type.Timestamp;

import java.io.Serializable;
import java.util.Date;

@Role(Role.Type.EVENT)
@Timestamp("executionTime")
@Expires("2h30m")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PreviewFlightEvent implements Serializable {

    private static final long serialVersionUID = 1L;
    private Flight flight;
    private Customer customer;
    private int numberOfAdults;
    private int numberOfChildren;
    private SeatClass seatClass;

    private Date executionTime;

    private BasePrice basePrice;
}
