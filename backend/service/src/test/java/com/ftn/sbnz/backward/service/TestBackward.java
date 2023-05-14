package com.ftn.sbnz.backward.service;

import com.ftn.sbnz.backward.model.models.flight.Airport;
import com.ftn.sbnz.backward.model.models.flight.Flight;
import com.ftn.sbnz.backward.model.models.flight.FlightRequest;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.kie.api.KieServices;
import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.Instant;

public class TestBackward {

    @Test
    public void flightTransferTest() {
        KieServices ks = KieServices.Factory.get();
        KieContainer kc = ks.newKieClasspathContainer();
        KieSession ksession = kc.newKieSession("flighttransfersession");

        Airport airport1 = new Airport();
        airport1.setId(1);
        airport1.setCity("BG");
        Airport airport2 = new Airport();
        airport2.setId(2);
        airport2.setCity("NIS");

        Airport airport3 = new Airport();
        airport3.setId(3);
        airport3.setCity("Istanbul");

        Airport airport4 = new Airport();
        airport4.setId(4);
        airport4.setCity("Paris");

        Flight flight1 = new Flight();
        flight1.setDepartureAirport(airport1);
        flight1.setArrivalAirport(airport2);
        flight1.setDepartureTime(Instant.parse("2023-07-01T11:19:42.12Z"));
        flight1.setArrivalTime(Instant.parse("2023-07-01T13:19:42.12Z"));

        Flight flight2 = new Flight();
        flight2.setDepartureAirport(airport2);
        flight2.setArrivalAirport(airport3);
        flight2.setDepartureTime(Instant.parse("2023-07-01T13:59:42.12Z"));
        flight2.setArrivalTime(Instant.parse("2023-07-01T15:19:42.12Z"));

        Flight flight3 = new Flight();
        flight3.setDepartureAirport(airport3);
        flight3.setArrivalAirport(airport4);
        flight3.setDepartureTime(Instant.parse("2023-07-01T16:19:42.12Z"));
        flight3.setArrivalTime(Instant.parse("2023-07-01T19:19:42.12Z"));

        ksession.insert(flight1);
        ksession.insert(flight2);
        ksession.insert(flight3);

        FlightRequest flightRequest = new FlightRequest();
        flightRequest.setDepartureAirport(airport1);
        flightRequest.setArrivalAirport(airport4);
        flightRequest.setDepartureTime(Instant.parse("2023-07-01T11:21:42.12Z"));
        ksession.insert(flightRequest);

        long ruleFireCount = ksession.fireAllRules();
        System.out.println(ruleFireCount);
    }
}
