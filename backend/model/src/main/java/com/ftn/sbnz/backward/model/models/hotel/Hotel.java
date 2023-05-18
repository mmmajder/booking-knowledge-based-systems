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
    private int stars;
    private String imageUrl;
    @OneToMany
    private List<HotelFacility> facilities;
    private double distanceFromCenter;
}
