package com.ftn.sbnz.backward.service.config;

import com.ftn.sbnz.backward.model.models.hotel.Hotel;
import com.ftn.sbnz.backward.service.repository.HotelRepository;
import org.kie.api.KieServices;
import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DroolsConfiguration {

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
}
