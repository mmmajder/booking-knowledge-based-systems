package com.ftn.sbnz.backward.service.config;

import com.ftn.sbnz.backward.model.models.flight.Airport;
import com.ftn.sbnz.backward.model.models.flight.DiscountForMultipleFlightTickets;
import com.ftn.sbnz.backward.model.models.flight.Flight;
import com.ftn.sbnz.backward.model.models.flight.PriceCatalogFlight;
import com.ftn.sbnz.backward.model.models.hotel.*;
import com.ftn.sbnz.backward.model.models.Customer;
import com.ftn.sbnz.backward.model.models.Payment;
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
import java.util.Date;
import java.util.List;

@Component
public class FillData implements CommandLineRunner {
    @Autowired
    private HotelRepository hotelRepository;
    @Autowired
    private KieSession hotelsKieSession;
    @Autowired
    private KieSession flightsKieSession;
//    @Autowired
//    private KieSession flightLoyaltyKieSession;

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
    private HotelFacilitiesRepository hotelFacilitiesRepository;
    @Autowired
    private HotelRoomRepository hotelRoomRepository;

    @Autowired
    private UserAuthRepository userAuthRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public void run(String... args) {
        fillHotelsData();
        fillFlightData();
        fillUserData();
        fillPayments();
        System.out.println("Data is inserted successfully.");
    }

    private void fillPayments() {
        Payment payment1 = new Payment();
        payment1.setIsAcceptedPayment(true);
        payment1.setTotalPrice(1000.0);
        payment1.setEmail("customer@gmail.com");
        payment1.setExecutionTime(new Date());
        payment1.setDeleted(false);

        Payment payment2 = new Payment();
        payment2.setIsAcceptedPayment(true);
        payment2.setTotalPrice(500.0);
        payment2.setEmail("customer@gmail.com");
        payment2.setExecutionTime(new Date());
        payment2.setDeleted(false);

//        flightLoyaltyKieSession.insert(payment1);
//        flightLoyaltyKieSession.insert(payment2);
        flightsKieSession.insert(payment1);
        flightsKieSession.insert(payment2);

//        flightsKieSession.setGlobal("grandTotalPrice", new ArrayList<>());
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

//        flightLoyaltyKieSession.insert(customer1);
//        flightLoyaltyKieSession.insert(customer2);
        flightsKieSession.insert(customer1);
        flightsKieSession.insert(customer2);
        System.out.println("Filled customer data");
    }

    private void fillHotelsData() {
        HotelFacility hotelFacility1 = new HotelFacility("Pool", 0.0);
        HotelFacility hotelFacility2 = new HotelFacility("Spa", 0.0);
        HotelFacility hotelFacility3 = new HotelFacility( "Parking", 15.0);
        HotelFacility hotelFacility4 = new HotelFacility("Gym", 10.0);
        HotelFacility hotelFacility5 = new HotelFacility("Cinema", 20.0);
        HotelFacility hotelFacility6 = new HotelFacility("Sauna", 0.0);
        HotelFacility hotelFacility7 = new HotelFacility("WiFi", 0.0);
        hotelFacilitiesRepository.save(hotelFacility1);
        hotelFacilitiesRepository.save(hotelFacility2);
        hotelFacilitiesRepository.save(hotelFacility3);
        hotelFacilitiesRepository.save(hotelFacility4);
        hotelFacilitiesRepository.save(hotelFacility5);
        hotelFacilitiesRepository.save(hotelFacility6);
        hotelFacilitiesRepository.save(hotelFacility7);

        Hotel hotel1 = new Hotel(1L, "Italian Villa", "123 Via Roma", "Rome", "Italy", Arrays.asList(hotelFacility1, hotelFacility2, hotelFacility7), new ArrayList<>(), 8.7, 5, "https://images.unsplash.com/photo-1594741158704-5a784b8e59fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", 500);
        Hotel hotel2 = new Hotel(2L, "Coastal Retreat", "456 Via Marina", "Sorrento", "Italy", Arrays.asList(hotelFacility4, hotelFacility3), new ArrayList<>(), 9.2, 4, "https://images.unsplash.com/photo-1588284722618-55732cfed6b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80", 200);
        Hotel hotel3 = new Hotel(3L, "Tuscan Resort", "789 Via Toscana", "Florence", "Italy", Arrays.asList(hotelFacility5, hotelFacility6), new ArrayList<>(), 8.5, 4, "https://images.unsplash.com/photo-1609949279531-cf48d64bed89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80", 1000);
        Hotel hotel4 = new Hotel(4L, "Venetian Palace", "321 Piazza San Marco", "Venice", "Italy", Arrays.asList(hotelFacility4, hotelFacility5), new ArrayList<>(), 9.8, 5, "https://images.unsplash.com/photo-1535825400335-401dbaeea8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80", 300);
        Hotel hotel5 = new Hotel(5L, "Amalfi Coast Resort", "987 Via Positano", "Amalfi", "Italy", Arrays.asList(hotelFacility4, hotelFacility5), new ArrayList<>(), 8.3, 3, "https://images.unsplash.com/photo-1528301719638-3f517aebc11c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", 100);
        Hotel hotel6 = new Hotel(6L, "Beachfront Hotel", "123 Beach Road", "Athens", "Greece", Arrays.asList(hotelFacility4, hotelFacility5), new ArrayList<>(), 8.7, 5, "https://images.unsplash.com/photo-1582757345040-9e0d1ebbeefb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80", 100);
        Hotel hotel7 = new Hotel(7L, "Island Paradise", "456 Paradise Island", "Mykonos", "Greece", Arrays.asList(hotelFacility3, hotelFacility6, hotelFacility7), new ArrayList<>(), 9.2, 4, "https://images.unsplash.com/photo-1498503403619-e39e4ff390fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXlrb25vcyUyMGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60", 0);
        Hotel hotel8 = new Hotel(8L, "Santorini Retreat", "789 Caldera Cliff", "Santorini", "Greece", Arrays.asList(hotelFacility3, hotelFacility5), new ArrayList<>(), 8.5, 4, "https://images.unsplash.com/photo-1586595847028-8f459a1e58a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1240&q=80", 100);
        Hotel hotel9 = new Hotel(9L, "Crete Resort", "321 Elafonisi Beach", "Crete", "Greece", Arrays.asList(hotelFacility3, hotelFacility6), new ArrayList<>(), 9.8, 5, "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3JldGUlMjBob3RlbHxlbnwwfDB8MHx8fDA%3D%3D&auto=format&fit=crop&w=600&q=60", 200);
        Hotel hotel10 = new Hotel(10L, "Rhodes Beach Hotel", "987 Rhodes Town", "Rhodes", "Greece", Arrays.asList(hotelFacility3, hotelFacility6, hotelFacility7), new ArrayList<>(), 8.3, 3, "https://images.unsplash.com/photo-1671173832142-d4b1ac622b4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9kb3MlMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60", 50);
        Hotel hotel11 = new Hotel(11L, "Bosphorus View Hotel", "123 Bosphorus Ave", "Istanbul", "Turkey", new ArrayList<>(), new ArrayList<>(), 8.7, 5, "https://images.unsplash.com/photo-1675409145919-277c0fc2aa7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80", 500);
        Hotel hotel12 = new Hotel(12L, "Antalya Beach Resort", "456 Lara Beach", "Antalya", "Turkey", Arrays.asList(hotelFacility1, hotelFacility6, hotelFacility7), new ArrayList<>(), 9.2, 4, "https://images.unsplash.com/photo-1677177906706-c2b597d9e8e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFudGFseWElMjBob3RlbHxlbnwwfDB8MHx8fDA%3D%3D&auto=format&fit=crop&w=600&q=60", 0);
        Hotel hotel13 = new Hotel(13L, "Cappadocia Cave Hotel", "789 Fairy Chimneys St", "Cappadocia", "Turkey", Arrays.asList(hotelFacility3, hotelFacility6, hotelFacility2), new ArrayList<>(), 8.5, 4, "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FwY2Fkb2NpYSUyMGhvdGVsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60", 2000);
        Hotel hotel14 = new Hotel(14L, "Pamukkale Thermal Resort", "321 Hierapolis Ave", "Pamukkale", "Turkey", Arrays.asList(hotelFacility3, hotelFacility4, hotelFacility7), new ArrayList<>(), 9.8, 5, "https://images.unsplash.com/photo-1529290130-4ca3753253ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80", 100);
        Hotel hotel15 = new Hotel(15L, "Bodrum Beachfront Hotel", "987 Bodrum Peninsula", "Bodrum", "Turkey", new ArrayList<>(), new ArrayList<>(), 8.3, 3, "https://images.unsplash.com/photo-1597390871277-666712598c1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1215&q=80", 100);
        List<Hotel> hotels = Arrays.asList(hotel1, hotel2, hotel3, hotel4, hotel5, hotel6, hotel7, hotel8, hotel9, hotel10, hotel11, hotel12, hotel13, hotel14, hotel15);

        for (Hotel h : hotels) {
            HotelRoom hotelRoom1 = new HotelRoom(h.getId(), 1, RoomType.APARTMENT, 2, 2);
            HotelRoom hotelRoom2 = new HotelRoom(h.getId(), 2, RoomType.DOUBLE, 2, 2);
            HotelRoom hotelRoom3 = new HotelRoom(h.getId(), 3, RoomType.DOUBLE, 2, 0);
            HotelRoom hotelRoom4 = new HotelRoom(h.getId(), 4, RoomType.SINGLE, 1, 0);
            HotelRoom hotelRoom5 = new HotelRoom(h.getId(), 5, RoomType.TRIPLE, 4, 0);
            h.setHotelRooms(Arrays.asList(hotelRoom1, hotelRoom2, hotelRoom3, hotelRoom4, hotelRoom5));
            hotelRoomRepository.save(hotelRoom1);
            hotelRoomRepository.save(hotelRoom2);
            hotelRoomRepository.save(hotelRoom3);
            hotelRoomRepository.save(hotelRoom4);
            hotelRoomRepository.save(hotelRoom5);

            hotelRepository.save(h);
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
                new Flight(airports.get(5), airports.get(6), LocalDateTime.parse("2023-07-01T20:19:42.120", formatter).toInstant(ZoneOffset.UTC), LocalDateTime.parse("2023-07-01T21:19:42.120", formatter).toInstant(ZoneOffset.UTC), "Air France", priceCatalogFlight),
                new Flight(airports.get(5), airports.get(0), LocalDateTime.parse("2023-07-08T20:19:42.120", formatter).toInstant(ZoneOffset.UTC), LocalDateTime.parse("2023-07-08T21:19:42.120", formatter).toInstant(ZoneOffset.UTC), "Air France", priceCatalogFlight)
        );
        flightRepository.saveAll(flights);
        for (Flight flight : flights) {
            flightsKieSession.insert(flight);
        }
    }
}
