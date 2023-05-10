package com.ftn.sbnz.model.model.hotel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Hotel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true)
    private Long id;

    private String name;
    private String address;
    private String city;
    private String country;
    private List<HotelRoom> hotelRooms;
    private HotelOccupancy hotelOccupancy;
    private double rating;
    private PriceCatalog priceCatalog;

    private double distanceFromCenter;
    // todo ANDJI: content -WiFi, parking, teretana, restoran, fitness
    // todo ANDJI: fun activities -(sauna, bazen, planinarenje, bioskop…)

//    private List<Image> images;
}
