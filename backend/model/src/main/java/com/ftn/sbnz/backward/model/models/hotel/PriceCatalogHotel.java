package com.ftn.sbnz.backward.model.models.hotel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class PriceCatalogHotel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true)
    private long id;

    private RoomType basePrice;
    private double numberOfStarsPrice;

//    private double discountForNumberOfDays;  //todo: ANDJI make as you wish
    @OneToOne
    private FoodPrice foodPrice;

    private double additionalServicesPrice; //todo: ANDJI make as you wish

    private double holidaysPriceIncreaseInPercent;
}
