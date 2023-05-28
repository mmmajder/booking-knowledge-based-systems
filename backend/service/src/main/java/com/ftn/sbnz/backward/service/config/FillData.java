package com.ftn.sbnz.backward.service.config;

import com.ftn.sbnz.backward.model.models.Customer;
import com.ftn.sbnz.backward.model.models.UserAuth;
import com.ftn.sbnz.backward.model.models.enums.UserRole;
import com.ftn.sbnz.backward.model.models.flight.*;
import com.ftn.sbnz.backward.model.models.hotel.Hotel;
import com.ftn.sbnz.backward.service.repository.*;
import org.kie.api.runtime.KieSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Component
public class FillData implements CommandLineRunner {
    @Autowired
    private HotelRepository hotelRepository;
    @Autowired
    private KieSession hotelsKieSession;

    @Autowired
    private KieSession flightsKieSession;

    @Autowired
    private KieSession flightLoyaltyKieSession;

    @Autowired
    private FlightRepository flightRepository;

    @Autowired
    private AirportRepository airportRepository;

    @Autowired
    private LuggagePriceRepository luggagePriceRepository;

    @Autowired
    private PriceCatalogFlightRepository priceCatalogFlightRepository;

    @Autowired
    private DiscountForMultipleFlightTicketsRepository discountForMultipleFlightTicketsRepository;

    @Autowired
    private UserAuthRepository userAuthRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public void run(String... args) {
        fillHotelData();
        fillFlightData();
        fillUserData();
    }

    private void fillUserData() {
        UserAuth userAuth1 = new UserAuth();
        userAuth1.setDeleted(false);
        userAuth1.setIsEnabled(true);
        userAuth1.setLastPasswordSet(Timestamp.valueOf("2021-12-12 00:00:00"));
        userAuthRepository.save(userAuth1);

        UserAuth userAuth2 = new UserAuth();
        userAuth2.setDeleted(false);
        userAuth2.setIsEnabled(true);
        userAuth2.setLastPasswordSet(Timestamp.valueOf("2021-12-12 00:00:00"));
        userAuthRepository.save(userAuth2);

        // Insert into customer table
        Customer customer1 = new Customer();
        customer1.setEmail("customer@gmail.com");
        customer1.setCity("Customville");
        customer1.setDeleted(false);
        customer1.setBlocked(false);
        customer1.setName("Customer");
        customer1.setPassword("$2a$10$2Mtev/q1qqNoSn39O7194eZVLBEvgM2dKzjkO0NUWETNKUYY9R/RO");
        customer1.setPhoneNumber("064 433456");
        customer1.setRole(UserRole.CUSTOMER);
        customer1.setSurname("Customic");
        customer1.setUserAuth(userAuth1);
        customer1.setNumberOfTokens(1000.0);
        customer1.setActive(false);
        userRepository.save(customer1);

        Customer customer2 = new Customer();
        customer2.setEmail("petar@gmail.com");
        customer2.setCity("Petrovgrad");
        customer2.setDeleted(false);
        customer2.setBlocked(false);
        customer2.setName("Petar");
        customer2.setPassword("$2a$10$tnplXdStY6t7kOqqKssMYedAGjJ0T3OJH2BxeT81c1YrDqOUvHLD6");
        customer2.setPhoneNumber("064 654321");
        customer2.setRole(UserRole.CUSTOMER);
        customer2.setSurname("Petrovic");
        customer2.setUserAuth(userAuth2);
        customer2.setNumberOfTokens(11150.0);
        customer2.setActive(false);
        userRepository.save(customer2);

        flightLoyaltyKieSession.insert(customer1);
        flightLoyaltyKieSession.insert(customer2);
        System.out.println("Filled customer data");
    }

    private void fillHotelData() {
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

    private void fillFlightData() {
        List<Airport> airports = Arrays.asList(
                new Airport("BEG", "Serbia", "Belgrad (Beograd) - Belgrade Nikola Tesla International"),
                new Airport("SOF", "Bulgaria", "Sofia - Vrazhdebna"),
                new Airport("INI", "Serbia", "Nis"),
                new Airport("IST", "Turkey", "Istanbul - Istanbul Atatürk Airport"),
                new Airport("AMS", "Netherlands", "Amsterdam - Amsterdam Airport Schiphol"),
                new Airport("PAR", "France", "Paris"),
                new Airport("MUC", "Germany", "Muenchen (Munich) - Franz Josef Strauss"),
                new Airport("AAR", "Denmark", "Aarhus"),
                new Airport("ZRH", "Switzerland", "Zurich (Zürich) - Kloten")
        );
        airportRepository.saveAll(airports);

        // Save price catalog flight
        PriceCatalogFlight priceCatalogFlight = new PriceCatalogFlight(100, 200, 150, 170, 0.2, 25, 30, 20);
        priceCatalogFlightRepository.save(priceCatalogFlight);

        // Save discount for multiple flight tickets
        List<DiscountForMultipleFlightTickets> discounts = Arrays.asList(
                new DiscountForMultipleFlightTickets(0.1, 5),
                new DiscountForMultipleFlightTickets(0.2, 10)
        );
        discountForMultipleFlightTicketsRepository.saveAll(discounts);

        // Save price catalog flight discount for multiple tickets
        priceCatalogFlight.setDiscountForMultipleTickets(discounts);

        LuggagePrice luggagePrice1 = new LuggagePrice(1L, 7, 10);
        LuggagePrice luggagePrice2 = new LuggagePrice(2L, 12, 20);
        LuggagePrice luggagePrice3 = new LuggagePrice(3L, 15, 30);
        priceCatalogFlight.setLuggagePrices(new ArrayList<>(Arrays.asList(luggagePrice1, luggagePrice2, luggagePrice3)));

        luggagePriceRepository.save(luggagePrice1);
        luggagePriceRepository.save(luggagePrice2);
        luggagePriceRepository.save(luggagePrice3);

        priceCatalogFlightRepository.save(priceCatalogFlight);

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS");
        List<Flight> flights = Arrays.asList(
                new Flight(airports.get(0), airports.get(2), LocalDateTime.parse("2023-07-01T11:19:42.120", formatter).toInstant(ZoneOffset.UTC), LocalDateTime.parse("2023-07-01T13:19:42.120", formatter).toInstant(ZoneOffset.UTC), "Air Serbia", priceCatalogFlight),
                new Flight(airports.get(2), airports.get(3), LocalDateTime.parse("2023-07-01T13:59:42.120", formatter).toInstant(ZoneOffset.UTC), LocalDateTime.parse("2023-07-01T15:19:42.120", formatter).toInstant(ZoneOffset.UTC), "Air Serbia", priceCatalogFlight),
                new Flight(airports.get(2), airports.get(3), LocalDateTime.parse("2023-07-01T14:59:42.120", formatter).toInstant(ZoneOffset.UTC), LocalDateTime.parse("2023-07-01T15:19:42.120", formatter).toInstant(ZoneOffset.UTC), "Turkish Airlines", priceCatalogFlight),
                new Flight(airports.get(3), airports.get(5), LocalDateTime.parse("2023-07-01T16:19:42.120", formatter).toInstant(ZoneOffset.UTC), LocalDateTime.parse("2023-07-01T19:19:42.120", formatter).toInstant(ZoneOffset.UTC), "Turkish Airlines", priceCatalogFlight),
                new Flight(airports.get(2), airports.get(4), LocalDateTime.parse("2023-07-01T13:59:42.120", formatter).toInstant(ZoneOffset.UTC), LocalDateTime.parse("2023-07-01T15:19:42.120", formatter).toInstant(ZoneOffset.UTC), "Air Serbia", priceCatalogFlight),
                new Flight(airports.get(4), airports.get(5), LocalDateTime.parse("2023-07-01T16:19:42.120", formatter).toInstant(ZoneOffset.UTC), LocalDateTime.parse("2023-07-01T19:19:42.120", formatter).toInstant(ZoneOffset.UTC), "Air France", priceCatalogFlight),
                new Flight(airports.get(0), airports.get(1), LocalDateTime.parse("2023-07-01T16:19:42.120", formatter).toInstant(ZoneOffset.UTC), LocalDateTime.parse("2023-07-01T19:19:42.120", formatter).toInstant(ZoneOffset.UTC), "Air Serbia", priceCatalogFlight),
                new Flight(airports.get(5), airports.get(6), LocalDateTime.parse("2023-07-01T20:19:42.120", formatter).toInstant(ZoneOffset.UTC), LocalDateTime.parse("2023-07-01T21:19:42.120", formatter).toInstant(ZoneOffset.UTC), "Air France", priceCatalogFlight)
        );
        flightRepository.saveAll(flights);

        System.out.println("CAO OVDE MIKI");
        System.out.println(flights);
        for(Flight flight: flights) {
            flightsKieSession.insert(flight);
        }
    }
}
