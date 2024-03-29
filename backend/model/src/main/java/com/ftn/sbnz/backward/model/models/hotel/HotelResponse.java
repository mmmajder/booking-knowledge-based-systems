package com.ftn.sbnz.backward.model.models.hotel;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class HotelResponse {
    private Long id;
    private String name;
    private String address;
    private String image;
    private String country;
    private String city;
    private double rating;
    private double stars;
    private double price;

    public HotelResponse(Hotel h, double price) {
        this.id = h.getId();
        this.name = h.getName();
        this.address = h.getAddress();
        this.image = h.getImageUrl();
        this.rating = h.getRating();
        this.stars = h.getStars();
        this.city = h.getCity();
        this.country = h.getCountry();
        this.price = price;
    }
}
