package com.ftn.sbnz.backward.service;

import com.ftn.sbnz.backward.model.models.flight.Airport;
import com.ftn.sbnz.backward.model.models.flight.Flight;
import com.ftn.sbnz.backward.model.models.flight.FlightRequest;
import com.ftn.sbnz.backward.model.models.flight.NumberOfStops;
import org.junit.jupiter.api.Test;
import org.kie.api.KieServices;
import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

public class TestBackward {

    @Test
    public void flightTransferTest() {
        KieServices ks = KieServices.Factory.get();
        KieContainer kc = ks.newKieClasspathContainer();
        KieSession ksession = kc.newKieSession("flighttransfersession");

        Airport airportBG = new Airport();
        airportBG.setId(1);
        airportBG.setName("BG");
        airportBG.setCode("BG");
        Airport airportNIS = new Airport();
        airportNIS.setId(2);
        airportNIS.setName("NIS");
        airportNIS.setCode("NIS");

        Airport airportISTANBUL = new Airport();
        airportISTANBUL.setId(3);
        airportISTANBUL.setName("Istanbul");
        airportISTANBUL.setCode("Istanbul");

        Airport airportPARIS = new Airport();
        airportPARIS.setId(4);
        airportPARIS.setName("Paris");
        airportPARIS.setCode("Paris");

        Airport airportAMS = new Airport();
        airportAMS.setId(5);
        airportAMS.setName("Amsterdam");
        airportAMS.setCode("Amsterdam");

        Airport airportSOF = new Airport();
        airportSOF.setId(6);
        airportSOF.setName("SOFIA");
        airportSOF.setCode("SOFIA");

        Airport airportMIN = new Airport();
        airportMIN.setId(7);
        airportMIN.setName("MINHEN");
        airportMIN.setCode("MINHEN");

        Flight flightBGNIS = new Flight();
        flightBGNIS.setDepartureAirport(airportBG);
        flightBGNIS.setArrivalAirport(airportNIS);
        flightBGNIS.setDepartureTime(Instant.parse("2023-07-01T11:19:42.12Z"));
        flightBGNIS.setArrivalTime(Instant.parse("2023-07-01T13:19:42.12Z"));
        flightBGNIS.setId(1L);

        Flight flightNISIST = new Flight();
        flightNISIST.setDepartureAirport(airportNIS);
        flightNISIST.setArrivalAirport(airportISTANBUL);
        flightNISIST.setDepartureTime(Instant.parse("2023-07-01T13:59:42.12Z"));
        flightNISIST.setArrivalTime(Instant.parse("2023-07-01T15:19:42.12Z"));
        flightNISIST.setId(2L);

        Flight flightNISIST2 = new Flight();
        flightNISIST2.setDepartureAirport(airportNIS);
        flightNISIST2.setArrivalAirport(airportISTANBUL);
        flightNISIST2.setDepartureTime(Instant.parse("2023-07-01T14:59:42.12Z"));
        flightNISIST2.setArrivalTime(Instant.parse("2023-07-01T15:19:42.12Z"));
        flightNISIST2.setId(3L);

        Flight flightISTPAR = new Flight();
        flightISTPAR.setDepartureAirport(airportISTANBUL);
        flightISTPAR.setArrivalAirport(airportPARIS);
        flightISTPAR.setDepartureTime(Instant.parse("2023-07-01T16:19:42.12Z"));
        flightISTPAR.setArrivalTime(Instant.parse("2023-07-01T19:19:42.12Z"));
        flightISTPAR.setId(4L);

        Flight flightNISAMS = new Flight();
        flightNISAMS.setDepartureAirport(airportNIS);
        flightNISAMS.setArrivalAirport(airportAMS);
        flightNISAMS.setDepartureTime(Instant.parse("2023-07-01T13:59:42.12Z"));
        flightNISAMS.setArrivalTime(Instant.parse("2023-07-01T15:19:42.12Z"));
        flightNISAMS.setId(5L);

        Flight flightAMSPAR = new Flight();
        flightAMSPAR.setDepartureAirport(airportAMS);
        flightAMSPAR.setArrivalAirport(airportPARIS);
        flightAMSPAR.setDepartureTime(Instant.parse("2023-07-01T16:19:42.12Z"));
        flightAMSPAR.setArrivalTime(Instant.parse("2023-07-01T19:19:42.12Z"));
        flightAMSPAR.setId(6L);

        Flight flightBGSOF = new Flight();
        flightBGSOF.setDepartureAirport(airportBG);
        flightBGSOF.setArrivalAirport(airportSOF);
        flightBGSOF.setDepartureTime(Instant.parse("2023-07-01T16:19:42.12Z"));
        flightBGSOF.setArrivalTime(Instant.parse("2023-07-01T19:19:42.12Z"));
        flightBGSOF.setId(7L);

        Flight flightPARMIN = new Flight();
        flightPARMIN.setDepartureAirport(airportPARIS);
        flightPARMIN.setArrivalAirport(airportMIN);
        flightPARMIN.setDepartureTime(Instant.parse("2023-07-01T20:19:42.12Z"));
        flightPARMIN.setArrivalTime(Instant.parse("2023-07-01T21:19:42.12Z"));
        flightPARMIN.setId(8L);


        ksession.insert(flightBGNIS);
        ksession.insert(flightNISIST);
        ksession.insert(flightNISIST2);
        ksession.insert(flightISTPAR);
        ksession.insert(flightNISAMS);
        ksession.insert(flightAMSPAR);
        ksession.insert(flightBGSOF);
        ksession.insert(flightPARMIN);

        FlightRequest flightRequest = new FlightRequest();
        flightRequest.setDepartureAirport(airportNIS);
        flightRequest.setArrivalAirport(airportMIN);
        flightRequest.setDepartureTime(Instant.parse("2023-07-01T11:00:42.12Z"));
        flightRequest.setNumberOfStops(NumberOfStops.ONE_MAX);

        List<List<Flight>> order = new ArrayList<>();
        ksession.setGlobal("order", order);


        ksession.insert(flightRequest);

        long ruleFireCount = ksession.fireAllRules();
        System.out.println("Kraj");
        System.out.println(flightRequest.getRoutes());
    }
}
