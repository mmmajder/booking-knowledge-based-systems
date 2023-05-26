package com.ftn.sbnz.backward.model.models.flight;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
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

    public PriceCatalogFlight(double economyPrice, double premiumPrice, double businessPrice, double firstClassPrice, double discountForChildren, double priorityBoardingPrice, double chooseSeatPrice, double holidaysPriceIncreaseInPercent) {
        this.economyPrice = economyPrice;
        this.premiumPrice = premiumPrice;
        this.businessPrice = businessPrice;
        this.firstClassPrice = firstClassPrice;
        this.discountForChildren = discountForChildren;
        this.priorityBoardingPrice = priorityBoardingPrice;
        this.chooseSeatPrice = chooseSeatPrice;
        this.holidaysPriceIncreaseInPercent = holidaysPriceIncreaseInPercent;
    }

    public double calculateDiscountForMultipleTickets(int numberOfTickets) {
        double currentDiscount = 0;
        discountForMultipleTickets.sort(Comparator.comparingDouble(DiscountForMultipleFlightTickets::getDiscount));
        for (DiscountForMultipleFlightTickets discount : discountForMultipleTickets) {
            if (numberOfTickets >= discount.getNumberOfTicketsThreshold()) {
                currentDiscount = discount.getDiscount();
            } else {
                return currentDiscount;
            }
        }
        return currentDiscount;
    }

    public double calculateLuggagePrice(double weight) {
        double price = 0;
        luggagePrices.sort(Comparator.comparingDouble(LuggagePrice::getWeightThreshold));
        for (int i = 0; i < luggagePrices.size(); i++) {
            if (weight < luggagePrices.get(i).getWeightThreshold()) {
                if (i == 0) {
                    return 0;
                } else {
                    return luggagePrices.get(i - 1).getPrice();
                }
            }
        }
        return luggagePrices.get(luggagePrices.size() - 1).getPrice();
    }

}
