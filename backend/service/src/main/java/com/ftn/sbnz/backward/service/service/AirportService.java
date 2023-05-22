package com.ftn.sbnz.backward.service.service;

import com.ftn.sbnz.backward.model.models.flight.Airport;
import com.ftn.sbnz.backward.service.repository.AirportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AirportService {
    @Autowired
    private AirportRepository airportRepository;

    public Airport getAirportFromFullName(String fullName) {
        String code = fullName.split(":")[0];
        return airportRepository.findByCode(code);
    }
}
