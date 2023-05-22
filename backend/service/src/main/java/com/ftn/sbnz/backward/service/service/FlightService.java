package com.ftn.sbnz.backward.service.service;

import com.ftn.sbnz.backward.model.models.flight.Airport;
import com.ftn.sbnz.backward.model.models.flight.FlightRequest;
import com.ftn.sbnz.backward.model.models.flight.NumberOfStops;
import com.ftn.sbnz.backward.service.dto.FlightResponse;
import com.ftn.sbnz.backward.service.dto.SearchFlightsParams;
import com.ftn.sbnz.backward.service.repository.FlightRepository;
import org.kie.api.KieServices;
import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FlightService {

    @Autowired
    private FlightRepository flightRepository;

    @Autowired
    private AirportService airportService;


    public List<FlightResponse> searchFlights(SearchFlightsParams searchFlightsParams) {
        if (searchFlightsParams.getSelectedNumberOfStops().equals(NumberOfStops.ANY) || searchFlightsParams.getSelectedNumberOfStops().equals(NumberOfStops.ONE_MAX)) {
            checkTransferFlights(searchFlightsParams);
        }
        return null;
    }

    private void checkTransferFlights(SearchFlightsParams searchFlightsParams) {
        KieSession ksession = KieService.getKieSession("flighttransfersession");
        Airport startAirport = airportService.getAirportFromFullName(searchFlightsParams.getFrom());
        Airport endAirport = airportService.getAirportFromFullName(searchFlightsParams.getTo());

        FlightRequest flightRequest = new FlightRequest();
        flightRequest.setDepartureAirport(startAirport);
        flightRequest.setArrivalAirport(endAirport);

        if (searchFlightsParams.isReturnTicket()) {
            flightRequest.setDepartureTime(searchFlightsParams.getDateRangeStart());
        } else {
            flightRequest.setDepartureTime(searchFlightsParams.getSingleDate());
        }
        ksession.insert(flightRequest);
        ksession.fireAllRules();
    }
}
