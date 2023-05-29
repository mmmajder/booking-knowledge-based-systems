package com.ftn.sbnz.backward.service.service;

import com.ftn.sbnz.backward.model.models.Customer;
import com.ftn.sbnz.backward.model.models.events.AdditionalServicesRequestEvent;
import com.ftn.sbnz.backward.model.models.events.FlightPaymentRequestEvent;
import com.ftn.sbnz.backward.model.models.events.PreviewFlightEvent;
import com.ftn.sbnz.backward.model.models.flight.*;
import com.ftn.sbnz.backward.service.dto.*;
import com.ftn.sbnz.backward.service.exception.BadRequestException;
import com.ftn.sbnz.backward.service.repository.FlightRepository;
import org.kie.api.runtime.KieSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class FlightService {

    @Autowired
    private FlightRepository flightRepository;

    @Autowired
    private AirportService airportService;

    @Autowired
    private UserService userService;

    @Autowired
    private KieSession flightsKieSession;

    public List<List<Flight>> searchFlights(SearchFlightsParams searchFlightsParams) {
        List<List<Flight>> foundFlights = new ArrayList<>();
        try {
            if (searchFlightsParams.isReturnTicket()) {
                foundFlights.addAll(searchFlights(searchFlightsParams.getFrom(), searchFlightsParams.getTo(), searchFlightsParams.getSelectedNumberOfStops(), searchFlightsParams.getDateRangeStart()));
                foundFlights.addAll(searchFlights(searchFlightsParams.getTo(), searchFlightsParams.getFrom(), searchFlightsParams.getSelectedNumberOfStops(), searchFlightsParams.getDateRangeEnd()));
            } else {
                foundFlights.addAll(searchFlights(searchFlightsParams.getFrom(), searchFlightsParams.getTo(), searchFlightsParams.getSelectedNumberOfStops(), searchFlightsParams.getSingleDate()));
            }
        } catch (Exception e) {
            System.out.println("Greska");
        }
        return foundFlights;
    }

    private List<List<Flight>> searchFlights(String from, String to, NumberOfStops numberOfStops, Instant depatureTime) {
        Airport startAirport = airportService.getAirportFromFullName(from);
        Airport endAirport = airportService.getAirportFromFullName(to);

        FlightRequest flightRequest = new FlightRequest();
        flightRequest.setDepartureAirport(startAirport);
        flightRequest.setArrivalAirport(endAirport);
        flightRequest.setNumberOfStops(numberOfStops);
        flightRequest.setDepartureTime(depatureTime);
        flightRequest.setRoutes(new ArrayList<>());

        List<List<Flight>> order = new ArrayList<>();
        flightsKieSession.setGlobal("order", order);
        flightsKieSession.setGlobal("startPositions", new ArrayList<>());
        flightsKieSession.insert(flightRequest);
        flightsKieSession.fireAllRules();
        return flightRequest.getRoutes();
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
        Flight flight = flightRepository.findById(flightId).get();

        PreviewFlightEvent previewFlightEvent = new PreviewFlightEvent();
        previewFlightEvent.setFlight(flight);
        previewFlightEvent.setCustomer(user);
        previewFlightEvent.setExecutionTime(Date.from(Instant.now()));
        previewFlightEvent.setNumberOfAdults(numberOfAdults);
        previewFlightEvent.setNumberOfChildren(numberOfChildren);
        previewFlightEvent.setSeatClass(seatClass);

        flightsKieSession.insert(previewFlightEvent);
        long ruleFireCount = flightsKieSession.fireAllRules();
        System.out.println(previewFlightEvent.getBasePrice());
        return new FlightBasePriceResponse(flight, previewFlightEvent.getBasePrice());
    }

    private void insertFlights(KieSession ksession) {
        PriceCatalogFlight priceCatalogFlight = new PriceCatalogFlight();
        priceCatalogFlight.setBusinessPrice(150);
        priceCatalogFlight.setDiscountForChildren(0.2);
        priceCatalogFlight.setChooseSeatPrice(30);
        priceCatalogFlight.setEconomyPrice(100);
        priceCatalogFlight.setFirstClassPrice(170);
        priceCatalogFlight.setHolidaysPriceIncreaseInPercent(25);
        priceCatalogFlight.setPremiumPrice(200);
        priceCatalogFlight.setPriorityBoardingPrice(20);

        DiscountForMultipleFlightTickets discount = new DiscountForMultipleFlightTickets();
        discount.setDiscount(0.1);
        discount.setNumberOfTicketsThreshold(5);

        DiscountForMultipleFlightTickets discount2 = new DiscountForMultipleFlightTickets();
        discount.setDiscount(0.2);
        discount.setNumberOfTicketsThreshold(10);

        priceCatalogFlight.setDiscountForMultipleTickets(new ArrayList<>(Arrays.asList(discount, discount2)));

        PlaneSeatType planeSeatType1 = new PlaneSeatType();
        planeSeatType1.setSeatClass(SeatClass.ECONOMY);
        planeSeatType1.setNumber(100);

        PlaneSeatType planeSeatType2 = new PlaneSeatType();
        planeSeatType2.setSeatClass(SeatClass.BUSINESS);
        planeSeatType2.setNumber(25);

        Plane plane = new Plane();
        plane.setAirlineAgency("Air Serbia");
        plane.setPlaneSeatTypes(new ArrayList<>(Arrays.asList(planeSeatType1, planeSeatType2)));

        Customer customer = new Customer();
        customer.setEmail("aca@gmail.com");

        PlaneSeat seat = new PlaneSeat();
        seat.setSeatClass(SeatClass.BUSINESS);
        seat.setNumber(12);

        Set<FlightTickets> tickets = new HashSet<>();
        FlightTickets flightTickets = new FlightTickets();
        flightTickets.setName("Pera");
        flightTickets.setSurname("Peric");
        flightTickets.setSeat(seat);
        flightTickets.setResponsibleUser(customer.getEmail());

        PlaneBusyness planeBusyness = new PlaneBusyness();
        planeBusyness.setPlane(plane);
        planeBusyness.setTickets(tickets);


        Flight flightBGNIS = new Flight();
        flightBGNIS.setDepartureAirport(airportService.findByCode("BEG"));
        flightBGNIS.setArrivalAirport(airportService.findByCode("INI"));
        flightBGNIS.setDepartureTime(Instant.parse("2023-07-01T11:19:42.12Z"));
        flightBGNIS.setArrivalTime(Instant.parse("2023-07-01T13:19:42.12Z"));
        flightBGNIS.setAirline("Air Serbia");
        flightBGNIS.setId(1L);
        flightBGNIS.setPriceCatalog(priceCatalogFlight);
        flightBGNIS.setPlaneBusyness(planeBusyness);

        Flight flightNISIST = new Flight();
        flightNISIST.setDepartureAirport(airportService.findByCode("INI"));
        flightNISIST.setArrivalAirport(airportService.findByCode("IST"));
        flightNISIST.setDepartureTime(Instant.parse("2023-07-01T13:59:42.12Z"));
        flightNISIST.setArrivalTime(Instant.parse("2023-07-01T15:19:42.12Z"));
        flightNISIST.setAirline("Air Serbia");
        flightNISIST.setId(2L);
        flightNISIST.setPriceCatalog(priceCatalogFlight);
        flightNISIST.setPlaneBusyness(planeBusyness);


        Flight flightNISIST2 = new Flight();
        flightNISIST2.setDepartureAirport(airportService.findByCode("INI"));
        flightNISIST2.setArrivalAirport(airportService.findByCode("IST"));
        flightNISIST2.setDepartureTime(Instant.parse("2023-07-01T14:59:42.12Z"));
        flightNISIST2.setArrivalTime(Instant.parse("2023-07-01T15:19:42.12Z"));
        flightNISIST2.setAirline("Turkish Airlines");
        flightNISIST2.setId(3L);
        flightNISIST2.setPriceCatalog(priceCatalogFlight);
        flightNISIST2.setPlaneBusyness(planeBusyness);

        Flight flightISTPAR = new Flight();
        flightISTPAR.setDepartureAirport(airportService.findByCode("IST"));
        flightISTPAR.setArrivalAirport(airportService.findByCode("PAR"));
        flightISTPAR.setDepartureTime(Instant.parse("2023-07-01T16:19:42.12Z"));
        flightISTPAR.setArrivalTime(Instant.parse("2023-07-01T19:19:42.12Z"));
        flightISTPAR.setAirline("Turkish Airlines");
        flightISTPAR.setId(4L);
        flightISTPAR.setPriceCatalog(priceCatalogFlight);
        flightISTPAR.setPlaneBusyness(planeBusyness);


        Flight flightNISAMS = new Flight();
        flightNISAMS.setDepartureAirport(airportService.findByCode("INI"));
        flightNISAMS.setArrivalAirport(airportService.findByCode("AMS"));
        flightNISAMS.setDepartureTime(Instant.parse("2023-07-01T13:59:42.12Z"));
        flightNISAMS.setArrivalTime(Instant.parse("2023-07-01T15:19:42.12Z"));
        flightNISAMS.setAirline("Air Serbia");
        flightNISAMS.setId(5L);
        flightNISAMS.setPriceCatalog(priceCatalogFlight);
        flightNISAMS.setPlaneBusyness(planeBusyness);


        Flight flightAMSPAR = new Flight();
        flightAMSPAR.setDepartureAirport(airportService.findByCode("AMS"));
        flightAMSPAR.setArrivalAirport(airportService.findByCode("PAR"));
        flightAMSPAR.setDepartureTime(Instant.parse("2023-07-01T16:19:42.12Z"));
        flightAMSPAR.setArrivalTime(Instant.parse("2023-07-01T19:19:42.12Z"));
        flightAMSPAR.setAirline("Air France");
        flightAMSPAR.setId(6L);
        flightAMSPAR.setPriceCatalog(priceCatalogFlight);
        flightAMSPAR.setPlaneBusyness(planeBusyness);


        Flight flightBGSOF = new Flight();
        flightBGSOF.setDepartureAirport(airportService.findByCode("BEG"));
        flightBGSOF.setArrivalAirport(airportService.findByCode("SOF"));
        flightBGSOF.setDepartureTime(Instant.parse("2023-07-01T16:19:42.12Z"));
        flightBGSOF.setArrivalTime(Instant.parse("2023-07-01T19:19:42.12Z"));
        flightBGSOF.setAirline("Air Serbia");
        flightBGSOF.setId(7L);
        flightBGSOF.setPriceCatalog(priceCatalogFlight);
        flightBGSOF.setPlaneBusyness(planeBusyness);


        Flight flightPARMIN = new Flight();
        flightPARMIN.setDepartureAirport(airportService.findByCode("PAR"));
        flightPARMIN.setArrivalAirport(airportService.findByCode("MUC"));
        flightPARMIN.setDepartureTime(Instant.parse("2023-07-01T20:19:42.12Z"));
        flightPARMIN.setArrivalTime(Instant.parse("2023-07-01T21:19:42.12Z"));
        flightPARMIN.setAirline("Air France");
        flightPARMIN.setId(8L);
        flightPARMIN.setPriceCatalog(priceCatalogFlight);
        flightPARMIN.setPlaneBusyness(planeBusyness);

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

    public List<AdditionalServicesRequestEvent> getAdditionalServicesPrice(List<AdditionalServicesRequestEvent> additionalServicesRequestEvent, Authentication authentication) {
        Customer user = (Customer) userService.getLoggedUser(authentication);
        if (user == null) {
            throw new BadRequestException("User does not exist");
        }

        for (AdditionalServicesRequestEvent additionalServicePrice : additionalServicesRequestEvent) {
            additionalServicePrice.setCustomer(user);
            flightsKieSession.insert(additionalServicePrice);
        }
        flightsKieSession.fireAllRules();

        // provera
        return additionalServicesRequestEvent;
    }

    public double getGrandTotalPrice() {
        List<Double> grandTotalPrice = (List<Double>) flightsKieSession.getGlobal("grandTotalPrice");
        System.out.println(grandTotalPrice);
        return grandTotalPrice.get(0);
    }

    public boolean reserve(FlightPaymentRequestEvent reserveFlightRequest, Authentication authentication) {
        reserveFlightRequest.setRequested(true);
        reserveFlightRequest.setCustomer((Customer) userService.getLoggedUser(authentication));
        reserveFlightRequest.setExecutionTime(new Date());
        Random random = new Random();
        long randomLong = random.nextLong();
        System.out.println("Random Long: " + randomLong);
        reserveFlightRequest.setId(randomLong);
        flightsKieSession.insert(reserveFlightRequest);
        flightsKieSession.fireAllRules();
        System.out.println(reserveFlightRequest);

        Customer customer = (Customer) userService.findByEmail(reserveFlightRequest.getCustomer().getEmail());
        customer.setNumberOfTokens(reserveFlightRequest.getCustomer().getNumberOfTokens());
        userService.save(customer);

        if (reserveFlightRequest.isAccepted()) {
            removeOccupiedSeats(reserveFlightRequest);
        }

        return reserveFlightRequest.isAccepted();
    }

    private void removeOccupiedSeats(FlightPaymentRequestEvent reserveFlightRequest) {
    }
}
