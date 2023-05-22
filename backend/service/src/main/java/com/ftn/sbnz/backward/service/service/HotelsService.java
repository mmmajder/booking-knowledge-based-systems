package com.ftn.sbnz.backward.service.service;

import com.ftn.sbnz.backward.model.models.hotel.Hotel;
import com.ftn.sbnz.backward.model.models.hotel.SearchHotelsParams;
import com.ftn.sbnz.backward.service.dto.HotelResponse;
import com.ftn.sbnz.backward.service.repository.HotelRepository;
import org.kie.api.KieServices;
import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class HotelsService {
    @Autowired
    private HotelRepository hotelRepository;

    public List<HotelResponse> searchHotels(SearchHotelsParams searchHotelsParams) {
        KieServices ks = KieServices.Factory.get();
        KieContainer kc = ks.newKieClasspathContainer();
        KieSession ksession = kc.newKieSession("searchhotelssession");

        List<Hotel> filteredHotels = new ArrayList<>();
        ksession.setGlobal("filteredHotels", filteredHotels);

        for (Hotel h : hotelRepository.findAll()) {
            ksession.insert(h);
        }

        ksession.insert(searchHotelsParams);
        ksession.fireAllRules();

        List<HotelResponse> hotelResponses = new ArrayList<>();
        for (Hotel h : filteredHotels) {
            hotelResponses.add(new HotelResponse(h));
        }

        ksession.dispose();
        return hotelResponses;
    }

    public void save(Hotel hotel) {
        hotelRepository.save(hotel);
    }

    public Hotel findById(Long hotelId) {
        Optional<Hotel> hotel = hotelRepository.findById(hotelId);
        return hotel.orElse(null);
    }
}
