package com.ftn.sbnz.backward.service.dto;

import com.ftn.sbnz.backward.model.models.hotel.*;
import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.OneToMany;
import java.util.List;

@Data
@AllArgsConstructor
public class PropertyDetailsResponse {
    private Long id;
    private String name;
    private String address;
    private String city;
    private String country;
    private double rating;
    private int stars;
    private String imageUrl;
    @OneToMany
    private List<HotelFacility> facilities;
    @OneToMany
    private List<Review> reviews;
    private double distanceFromCenter;

    public PropertyDetailsResponse(Hotel hotel) {
        this.id = hotel.getId();
        this.name = hotel.getName();
        this.address = hotel.getAddress();
        this.city = hotel.getCity();
        this.country = hotel.getCountry();
        this.stars = hotel.getStars();
        this.imageUrl = hotel.getImageUrl();
        this.rating = hotel.getRating();
        this.reviews = hotel.getReviews();
        this.facilities = hotel.getFacilities();
        this.distanceFromCenter = hotel.getDistanceFromCenter();
    }
}
