package com.ftn.sbnz.backward.model.models.events;

import com.ftn.sbnz.backward.model.models.Customer;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.kie.api.definition.type.Expires;
import org.kie.api.definition.type.Role;
import org.kie.api.definition.type.Timestamp;

import java.util.Date;

@Role(Role.Type.EVENT)
@Timestamp("executionTime")
@Expires("2h30m")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class FlightPaymentRequestEvent {

    private PreviewFlightEvent previewFlightEvent;
    private AdditionalServicesRequestEvent additionalServicesRequestEvent;
    private Customer customer;
    private boolean isRequested;
    private Date executionTime;
    private double totalPrice;
}
