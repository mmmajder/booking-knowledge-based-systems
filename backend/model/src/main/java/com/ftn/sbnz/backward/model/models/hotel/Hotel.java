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
    @OneToMany
    private List<HotelOccupancy> hotelOccupancy;
    private double rating;
    private int stars;
    private int points;
    private String imageUrl;
    @OneToMany
    private List<HotelFacility> facilities;
    @OneToMany
    private List<Review> reviews;
    private double distanceFromCenter;

    public void addPoints(Integer num) {
        this.points += num;
    }

    public void addPoints(Long num) {
        this.points += num;
    }
}
