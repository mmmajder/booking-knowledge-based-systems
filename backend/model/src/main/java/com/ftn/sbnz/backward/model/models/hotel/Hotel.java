package com.ftn.sbnz.backward.model.models.hotel;

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
    @OneToMany
    private List<HotelRoom> hotelRooms;
    @OneToOne
    private HotelOccupancy hotelOccupancy;
    private double rating;
    @OneToOne
    private PriceCatalogHotel priceCatalog;

    private double distanceFromCenter;
    // todo ANDJI: content -WiFi, parking, teretana, restoran, fitness
    // todo ANDJI: fun activities -(sauna, bazen, planinarenje, bioskop…)

//    private List<Image> images;
}
