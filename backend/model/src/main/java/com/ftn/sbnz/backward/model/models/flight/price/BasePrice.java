package com.ftn.sbnz.backward.model.models.flight.price;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class BasePrice {
    private double seatPrice;
    private double childrenDiscount;
    private double numberOfChildren;
    private double numberOfAdults;
    private double discountForNumberOfPassengers;
    private double totalPrice;
}
