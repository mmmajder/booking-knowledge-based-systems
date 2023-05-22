package com.ftn.sbnz.backward.model.models.flight.price;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class AdditionalServicesPrice {

    private double luggagePrice;
    private double priorityBoardingPrice;
    private double specificSeatsPrice;
    private double totalAdditionalPrice;

    @Override
    public String toString() {
        return "AdditionalServicesPrice{" +
                "luggagePrice=" + luggagePrice +
                ", priorityBoardingPrice=" + priorityBoardingPrice +
                ", specificSeatsPrice=" + specificSeatsPrice +
                ", totalAdditionalPrice=" + totalAdditionalPrice +
                '}';
    }
}
