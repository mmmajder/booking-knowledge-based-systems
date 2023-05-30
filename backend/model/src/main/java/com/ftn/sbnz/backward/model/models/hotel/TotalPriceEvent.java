package com.ftn.sbnz.backward.model.models.hotel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TotalPriceEvent {
    private double totalDiscount;
    private CalculateHotelPrice calculateHotelPrice;
}
