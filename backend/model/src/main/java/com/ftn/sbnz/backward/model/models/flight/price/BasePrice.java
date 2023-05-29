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
    private int numberOfChildren;
    private int numberOfAdults;
    private double discountForNumberOfPassengers;
    private double totalPrice;

    @Override
    public String toString() {
        return "BasePrice{" +
                "seatPrice=" + seatPrice +
                ", childrenDiscount=" + childrenDiscount +
                ", numberOfChildren=" + numberOfChildren +
                ", numberOfAdults=" + numberOfAdults +
                ", discountForNumberOfPassengers=" + discountForNumberOfPassengers +
                ", totalPrice=" + totalPrice +
                '}';
    }
}
