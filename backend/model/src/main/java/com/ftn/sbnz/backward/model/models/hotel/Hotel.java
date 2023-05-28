package com.ftn.sbnz.backward.model.models.hotel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
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
        System.out.println("DODAJEM " + num);
        this.points += num;
    }

    public void addPoints(Long num) {
        System.out.println("DODAJEM " + num);
        this.points += num;
    }

    public Hotel(Long id, String name, String address, String city, String country, List<HotelFacility> facilities, List<HotelRoom> hotelRooms, double rating, int stars, String image_url, int distance_from_center) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.city = city;
        this.country = country;
        this.rating = rating;
        this.stars = stars;
        this.imageUrl = image_url;
        this.distanceFromCenter = distance_from_center;
        this.points = 0;
        this.facilities = facilities;
        this.hotelRooms = hotelRooms;
        this.reviews = new ArrayList<>();
    }
}
