package com.ftn.sbnz.backward.model.models.flight;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class PriceCatalogFlight {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true)
    private Long id;

    private double economyPrice;
    private double premiumPrice;
    private double businessPrice;
    private double firstClassPrice;

    private double discountForChildren;

    @OneToMany
    private List<DiscountForMultipleFlightTickets> discountForMultipleTickets;
    @OneToMany
    private List<LuggagePrice> luggagePrices;
    private double priorityBoardingPrice;
    private double chooseSeatPrice;

    private double holidaysPriceIncreaseInPercent;

    public double calculateDiscountForMultipleTickets(int numberOfTickets) {
        double currentDiscount = 0;
        discountForMultipleTickets.sort((d1, d2) -> Double.compare(d1.getDiscount(), d2.getDiscount()));
        for (DiscountForMultipleFlightTickets discount : discountForMultipleTickets) {
            if (numberOfTickets >= discount.getNumberOfTicketsThreshold()) {
                currentDiscount = discount.getDiscount();
            } else {
                return currentDiscount;
            }
        }
        return currentDiscount;
    }

}
