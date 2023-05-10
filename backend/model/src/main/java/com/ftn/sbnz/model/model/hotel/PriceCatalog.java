package com.ftn.sbnz.model.model.hotel;

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
    private long id;

    private RoomType basePrice;
    private double numberOfStarsPrice;

//    private double discountForNumberOfDays;  //todo: ANDJI make as you wish
    private FoodPrice foodPrice;

    private double additionalServicesPrice; //todo: ANDJI make as you wish

    private double holidaysPriceIncreaseInPercent;
}
