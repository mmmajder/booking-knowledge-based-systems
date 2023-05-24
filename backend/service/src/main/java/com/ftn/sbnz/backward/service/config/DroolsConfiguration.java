package com.ftn.sbnz.backward.service.config;

import com.ftn.sbnz.backward.model.models.hotel.Hotel;
import com.ftn.sbnz.backward.service.repository.HotelRepository;
import org.kie.api.KieServices;
import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@Configuration
public class DroolsConfiguration {
    @Autowired
    private HotelRepository hotelRepository;

    @Bean
    public KieSession hotelsKieSession() {
        KieServices ks = KieServices.Factory.get();
        KieContainer kc = ks.newKieClasspathContainer();
        return kc.newKieSession("searchhotelssession");
    }

    @Bean
    public KieSession flightsKieSession() {
        KieServices ks = KieServices.Factory.get();
        KieContainer kc = ks.newKieClasspathContainer();
        return kc.newKieSession("flighttransfersession");
    }

//    @PostConstruct
//    private void fillData() {
//        List<Hotel> filteredHotels = new ArrayList<>();
//        hotelsKieSession().setGlobal("filteredHotels", filteredHotels);
//
//        for (Hotel h : hotelRepository.findAll()) {
//            hotelsKieSession().insert(h);
//        }
//    }
}
