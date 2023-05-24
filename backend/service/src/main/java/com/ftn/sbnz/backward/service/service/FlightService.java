package com.ftn.sbnz.backward.service.service;

import com.ftn.sbnz.backward.model.models.Customer;
import com.ftn.sbnz.backward.model.models.events.PreviewFlightEvent;
import com.ftn.sbnz.backward.model.models.flight.*;
import com.ftn.sbnz.backward.service.dto.FlightBasePriceResponse;
import com.ftn.sbnz.backward.service.dto.FlightPriceRequest;
import com.ftn.sbnz.backward.service.dto.FlightResponse;
import com.ftn.sbnz.backward.service.dto.SearchFlightsParams;
import com.ftn.sbnz.backward.service.exception.BadRequestException;
import com.ftn.sbnz.backward.service.repository.FlightRepository;
import org.kie.api.runtime.KieSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class FlightService {

    @Autowired
    private FlightRepository flightRepository;

    @Autowired
    private AirportService airportService;

    @Autowired
    private UserService userService;


    public List<List<Flight>> searchFlights(SearchFlightsParams searchFlightsParams) {
        if (searchFlightsParams.getSelectedNumberOfStops().equals(NumberOfStops.ANY) || searchFlightsParams.getSelectedNumberOfStops().equals(NumberOfStops.ONE_MAX)) {
            return getTransferFlights(searchFlightsParams);
//            return getFlightResponses(routes);
        }
        return null;
    }

    public List<FlightBasePriceResponse> getFlightBasePrices(FlightPriceRequest flightPriceRequest, Authentication authentication) {
        Customer user = (Customer) userService.getLoggedUser(authentication);
        if (user == null) {
            throw new BadRequestException("User does not exist");
        }
        List<FlightBasePriceResponse> flightBasePriceResponses = new ArrayList<>();
        for (Long flightId : flightPriceRequest.getFlightIds()) {
            flightBasePriceResponses.add(getFlightBasePrice(flightId, user, flightPriceRequest.getNumberOfAdults(), flightPriceRequest.getNumberOfChildren(), flightPriceRequest.getSeatClass()));
        }
        return flightBasePriceResponses;
    }

    private FlightBasePriceResponse getFlightBasePrice(Long flightId, Customer user, int numberOfAdults, int numberOfChildren, SeatClass seatClass) {
        KieSession ksession = KieService.getKieSession("flightpricesession");

        Flight flight = flightRepository.findById(flightId).get();

        PreviewFlightEvent previewFlightEvent = new PreviewFlightEvent();
        previewFlightEvent.setFlight(flight);
        previewFlightEvent.setCustomer(user);
        previewFlightEvent.setExecutionTime(Date.from(Instant.now()));
        previewFlightEvent.setNumberOfAdults(numberOfAdults);
        previewFlightEvent.setNumberOfChildren(numberOfChildren);
        previewFlightEvent.setSeatClass(seatClass);

        ksession.insert(previewFlightEvent);
        long ruleFireCount = ksession.fireAllRules();
        System.out.println(previewFlightEvent.getBasePrice());
        return new FlightBasePriceResponse(flight, previewFlightEvent.getBasePrice());
    }

    private List<List<Flight>> getTransferFlights(SearchFlightsParams searchFlightsParams) {
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

        insertFlights(ksession);
        List<List<Flight>> order = new ArrayList<>();
        ksession.setGlobal("order", order);
        ksession.insert(flightRequest);
        ksession.fireAllRules();
        return order;
    }


    private void insertFlights(KieSession ksession) {
        Flight flightBGNIS = new Flight();
        flightBGNIS.setDepartureAirport(airportService.findByCode("BEG"));
        flightBGNIS.setArrivalAirport(airportService.findByCode("INI"));
        flightBGNIS.setDepartureTime(Instant.parse("2023-07-01T11:19:42.12Z"));
        flightBGNIS.setArrivalTime(Instant.parse("2023-07-01T13:19:42.12Z"));
        flightBGNIS.setAirline("Air Serbia");
        flightBGNIS.setId(1L);

        Flight flightNISIST = new Flight();
        flightNISIST.setDepartureAirport(airportService.findByCode("INI"));
        flightNISIST.setArrivalAirport(airportService.findByCode("IST"));
        flightNISIST.setDepartureTime(Instant.parse("2023-07-01T13:59:42.12Z"));
        flightNISIST.setArrivalTime(Instant.parse("2023-07-01T15:19:42.12Z"));
        flightNISIST.setAirline("Air Serbia");
        flightNISIST.setId(2L);

        Flight flightNISIST2 = new Flight();
        flightNISIST2.setDepartureAirport(airportService.findByCode("INI"));
        flightNISIST2.setArrivalAirport(airportService.findByCode("IST"));
        flightNISIST2.setDepartureTime(Instant.parse("2023-07-01T14:59:42.12Z"));
        flightNISIST2.setArrivalTime(Instant.parse("2023-07-01T15:19:42.12Z"));
        flightNISIST2.setAirline("Turkish Airlines");
        flightNISIST2.setId(3L);

        Flight flightISTPAR = new Flight();
        flightISTPAR.setDepartureAirport(airportService.findByCode("IST"));
        flightISTPAR.setArrivalAirport(airportService.findByCode("PAR"));
        flightISTPAR.setDepartureTime(Instant.parse("2023-07-01T16:19:42.12Z"));
        flightISTPAR.setArrivalTime(Instant.parse("2023-07-01T19:19:42.12Z"));
        flightISTPAR.setAirline("Turkish Airlines");
        flightISTPAR.setId(4L);

        Flight flightNISAMS = new Flight();
        flightNISAMS.setDepartureAirport(airportService.findByCode("INI"));
        flightNISAMS.setArrivalAirport(airportService.findByCode("AMS"));
        flightNISAMS.setDepartureTime(Instant.parse("2023-07-01T13:59:42.12Z"));
        flightNISAMS.setArrivalTime(Instant.parse("2023-07-01T15:19:42.12Z"));
        flightNISAMS.setAirline("Air Serbia");
        flightNISAMS.setId(5L);

        Flight flightAMSPAR = new Flight();
        flightAMSPAR.setDepartureAirport(airportService.findByCode("AMS"));
        flightAMSPAR.setArrivalAirport(airportService.findByCode("PAR"));
        flightAMSPAR.setDepartureTime(Instant.parse("2023-07-01T16:19:42.12Z"));
        flightAMSPAR.setArrivalTime(Instant.parse("2023-07-01T19:19:42.12Z"));
        flightAMSPAR.setAirline("Air France");
        flightAMSPAR.setId(6L);

        Flight flightBGSOF = new Flight();
        flightBGSOF.setDepartureAirport(airportService.findByCode("BEG"));
        flightBGSOF.setArrivalAirport(airportService.findByCode("SOF"));
        flightBGSOF.setDepartureTime(Instant.parse("2023-07-01T16:19:42.12Z"));
        flightBGSOF.setArrivalTime(Instant.parse("2023-07-01T19:19:42.12Z"));
        flightBGSOF.setAirline("Air Serbia");
        flightBGSOF.setId(7L);

        Flight flightPARMIN = new Flight();
        flightPARMIN.setDepartureAirport(airportService.findByCode("PAR"));
        flightPARMIN.setArrivalAirport(airportService.findByCode("MUC"));
        flightPARMIN.setDepartureTime(Instant.parse("2023-07-01T20:19:42.12Z"));
        flightPARMIN.setArrivalTime(Instant.parse("2023-07-01T21:19:42.12Z"));
        flightPARMIN.setAirline("Air France");
        flightPARMIN.setId(8L);


        ksession.insert(flightBGNIS);
        ksession.insert(flightNISIST);
        ksession.insert(flightNISIST2);
        ksession.insert(flightISTPAR);
        ksession.insert(flightNISAMS);
        ksession.insert(flightAMSPAR);
        ksession.insert(flightBGSOF);
        ksession.insert(flightPARMIN);
    }


    private List<FlightResponse> getFlightResponses(List<List<Flight>> routes) {
        ArrayList<FlightResponse> responses = new ArrayList<>();
        for (List<Flight> route : routes) {
            responses.add(getFlightResponse(route));
        }
        return responses;
    }

    private FlightResponse getFlightResponse(List<Flight> route) {
        FlightResponse response = new FlightResponse();
        Flight firstFlight = route.get(0);
        Flight lastFlight = route.get(route.size() - 1);
        response.setFromDate(firstFlight.getDepartureTime());
        response.setToDate(lastFlight.getArrivalTime());
        response.setStartAirport(firstFlight.getDepartureAirport());
        response.setEndAirport(lastFlight.getArrivalAirport());
        response.setAirlines(route.stream()
                .map(Flight::getAirline)
                .collect(Collectors.toList()));
        response.setNumberOfStops(route.size() - 2);
        return response;
    }
}
