package com.ftn.sbnz.backward.service.config;

import com.ftn.sbnz.backward.model.models.hotel.Hotel;
import com.ftn.sbnz.backward.service.repository.*;
import org.kie.api.runtime.KieSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class FillData implements CommandLineRunner {
    @Autowired
    private HotelRepository hotelRepository;
    @Autowired
    private KieSession hotelsKieSession;

    @Override
    public void run(String... args) {
        List<Hotel> hotels = new ArrayList<>();

// Hotel 1
        Hotel hotel1 = new Hotel();
        hotel1.setName("Italian Villa");
        hotel1.setAddress("123 Via Roma");
        hotel1.setCity("Rome");
        hotel1.setCountry("Italy");
        hotel1.setRating(8.7);
        hotel1.setStars(5);
        hotel1.setPoints(0);
        hotel1.setImageUrl("https://images.unsplash.com/photo-1594741158704-5a784b8e59fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80");
        hotel1.setDistanceFromCenter(500);
        hotels.add(hotel1);

        // Hotel 2
        Hotel hotel2 = new Hotel();
        hotel2.setName("Coastal Retreat");
        hotel2.setAddress("456 Via Marina");
        hotel2.setCity("Sorrento");
        hotel2.setCountry("Italy");
        hotel2.setRating(9.2);
        hotel2.setStars(4);
        hotel2.setPoints(0);
        hotel2.setImageUrl("https://images.unsplash.com/photo-1588284722618-55732cfed6b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80");
        hotel2.setDistanceFromCenter(200);
        hotels.add(hotel2);

        // Hotel 3
        Hotel hotel3 = new Hotel();
        hotel3.setName("Tuscan Resort");
        hotel3.setAddress("789 Via Toscana");
        hotel3.setCity("Florence");
        hotel3.setCountry("Italy");
        hotel3.setRating(8.5);
        hotel3.setStars(4);
        hotel3.setPoints(0);
        hotel3.setImageUrl("https://images.unsplash.com/photo-1609949279531-cf48d64bed89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80");
        hotel3.setDistanceFromCenter(1000);
        hotels.add(hotel3);

        for (Hotel h : hotels) {
            hotelRepository.save(hotel1);
            hotelsKieSession.insert(h);
        }
        hotelsKieSession.fireAllRules();
    }
}