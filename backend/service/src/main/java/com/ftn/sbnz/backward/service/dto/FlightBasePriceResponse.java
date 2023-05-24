package com.ftn.sbnz.backward.service.dto;

import com.ftn.sbnz.backward.model.models.flight.Flight;
import com.ftn.sbnz.backward.model.models.flight.price.BasePrice;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class FlightBasePriceResponse {
    private Flight flight;
    private BasePrice basePrice;
}
