package com.ftn.sbnz.model.model.flight;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class PriceCatalog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true)
    private Long id;

    private double economyPrice;
    private double premiumPrice;
    private double businessPrice;
    private double firstClassPrice;

    private double discountForMultipleTickets; //todo make more complex
    private double luggagePrice;        //todo make more complex
    private double priorityBoardingPrice;
    private double chooseSeatPrice;

    private double holidaysPriceIncreaseInPercent;

}
