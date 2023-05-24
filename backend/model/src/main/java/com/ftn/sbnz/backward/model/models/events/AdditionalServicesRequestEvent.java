package com.ftn.sbnz.backward.model.models.events;

import com.ftn.sbnz.backward.model.models.flight.Flight;
import com.ftn.sbnz.backward.model.models.flight.PlaneSeat;
import com.ftn.sbnz.backward.model.models.flight.price.AdditionalServicesPrice;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.kie.api.definition.type.Expires;
import org.kie.api.definition.type.Role;
import org.kie.api.definition.type.Timestamp;

import java.util.Date;
import java.util.List;

@Role(Role.Type.EVENT)
@Timestamp("executionTime")
@Expires("2h30m")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AdditionalServicesRequestEvent {

    private static final long serialVersionUID = 1L;
    private Flight flight;

    private double luggageWeight;
    private boolean priorityBoarding;
    private boolean specificSeats;
    private List<PlaneSeat> seats;

    private AdditionalServicesPrice additionalServicesPrice;

    private Date executionTime;
}
