package com.ftn.sbnz.backward.service.config;

import com.ftn.sbnz.backward.model.models.flight.Airport;
import com.ftn.sbnz.backward.model.models.flight.DiscountForMultipleFlightTickets;
import com.ftn.sbnz.backward.model.models.flight.Flight;
import com.ftn.sbnz.backward.model.models.flight.PriceCatalogFlight;
import com.ftn.sbnz.backward.model.models.hotel.Hotel;
import com.ftn.sbnz.backward.service.repository.*;
import org.kie.api.runtime.KieSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

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
    private FlightRepository flightRepository;
    @Autowired
    private AirportRepository airportRepository;
    @Autowired
    private PriceCatalogFlightRepository priceCatalogFlightRepository;
    @Autowired
    private DiscountForMultipleFlightTicketsRepository discountForMultipleFlightTicketsRepository;

    @Override
    public void run(String... args) {
        fillHotelsData();
        fillFlightData();
    }

    private void fillHotelsData() {
        List<Hotel> hotels = new ArrayList<>();

        Hotel hotel1 = new Hotel(1L, "Italian Villa", "123 Via Roma", "Rome", "Italy", new ArrayList<>(), new ArrayList<>(), 8.7, 5, "https://images.unsplash.com/photo-1594741158704-5a784b8e59fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", 500);
        hotels.add(hotel1);
        Hotel hotel2 = new Hotel(2L, "Coastal Retreat", "456 Via Marina", "Sorrento", "Italy", new ArrayList<>(), new ArrayList<>(), 9.2, 4, "https://images.unsplash.com/photo-1588284722618-55732cfed6b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80", 200);
        hotels.add(hotel2);
        Hotel hotel3 = new Hotel(3L, "Tuscan Resort", "789 Via Toscana", "Florence", "Italy", new ArrayList<>(), new ArrayList<>(), 8.5, 4, "https://images.unsplash.com/photo-1609949279531-cf48d64bed89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80", 1000);
        hotels.add(hotel3);
        Hotel hotel4 = new Hotel(4L, "Venetian Palace", "321 Piazza San Marco", "Venice", "Italy", new ArrayList<>(), new ArrayList<>(), 9.8, 5, "https://images.unsplash.com/photo-1535825400335-401dbaeea8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80", 300);
        hotels.add(hotel4);
        Hotel hotel5 = new Hotel(5L, "Amalfi Coast Resort", "987 Via Positano", "Amalfi", "Italy", new ArrayList<>(), new ArrayList<>(), 8.3, 3, "https://images.unsplash.com/photo-1528301719638-3f517aebc11c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", 100);
        hotels.add(hotel5);
        Hotel hotel6 = new Hotel(6L, "Beachfront Hotel", "123 Beach Road", "Athens", "Greece", new ArrayList<>(), new ArrayList<>(), 8.7, 5, "https://images.unsplash.com/photo-1582757345040-9e0d1ebbeefb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80", 100);
        hotels.add(hotel6);
        Hotel hotel7 = new Hotel(7L, "Island Paradise", "456 Paradise Island", "Mykonos", "Greece", new ArrayList<>(), new ArrayList<>(), 9.2, 4, "https://images.unsplash.com/photo-1498503403619-e39e4ff390fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXlrb25vcyUyMGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60", 0);
        hotels.add(hotel7);
        Hotel hotel8 = new Hotel(8L, "Santorini Retreat", "789 Caldera Cliff", "Santorini", "Greece", new ArrayList<>(), new ArrayList<>(), 8.5, 4, "https://images.unsplash.com/photo-1586595847028-8f459a1e58a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1240&q=80", 100);
        hotels.add(hotel8);
        Hotel hotel9 = new Hotel(9L, "Crete Resort", "321 Elafonisi Beach", "Crete", "Greece", new ArrayList<>(), new ArrayList<>(), 9.8, 5, "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3JldGUlMjBob3RlbHxlbnwwfDB8MHx8fDA%3D%3D&auto=format&fit=crop&w=600&q=60", 200);
        hotels.add(hotel9);
        Hotel hotel10 = new Hotel(10L, "Rhodes Beach Hotel", "987 Rhodes Town", "Rhodes", "Greece", new ArrayList<>(), new ArrayList<>(), 8.3, 3, "https://images.unsplash.com/photo-1671173832142-d4b1ac622b4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9kb3MlMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60", 50);
        hotels.add(hotel10);
        Hotel hotel11 = new Hotel(11L, "Bosphorus View Hotel", "123 Bosphorus Ave", "Istanbul", "Turkey", new ArrayList<>(), new ArrayList<>(), 8.7, 5, "https://images.unsplash.com/photo-1675409145919-277c0fc2aa7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80", 500);
        hotels.add(hotel11);
        Hotel hotel12 = new Hotel(12L, "Antalya Beach Resort", "456 Lara Beach", "Antalya", "Turkey", new ArrayList<>(), new ArrayList<>(), 9.2, 4, "https://images.unsplash.com/photo-1677177906706-c2b597d9e8e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFudGFseWElMjBob3RlbHxlbnwwfDB8MHx8fDA%3D%3D&auto=format&fit=crop&w=600&q=60", 0);
        hotels.add(hotel12);
        Hotel hotel13 = new Hotel(13L, "Cappadocia Cave Hotel", "789 Fairy Chimneys St", "Cappadocia", "Turkey", new ArrayList<>(), new ArrayList<>(), 8.5, 4, "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FwY2Fkb2NpYSUyMGhvdGVsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60", 2000);
        hotels.add(hotel13);
        Hotel hotel14 = new Hotel(14L, "Pamukkale Thermal Resort", "321 Hierapolis Ave", "Pamukkale", "Turkey", new ArrayList<>(), new ArrayList<>(), 9.8, 5, "https://images.unsplash.com/photo-1529290130-4ca3753253ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80", 100);
        hotels.add(hotel14);
        Hotel hotel15 = new Hotel(15L, "Bodrum Beachfront Hotel", "987 Bodrum Peninsula", "Bodrum", "Turkey", new ArrayList<>(), new ArrayList<>(), 8.3, 3, "https://images.unsplash.com/photo-1597390871277-666712598c1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1215&q=80", 100);
        hotels.add(hotel15);

        for (Hotel h : hotels) {
            hotelRepository.save(hotel1);
            hotelsKieSession.insert(h);
        }
        List<Hotel> filteredHotels = new ArrayList<>();
        hotelsKieSession.setGlobal("filteredHotels", filteredHotels);
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
        PriceCatalogFlight priceCatalogFlight = new PriceCatalogFlight(150, 30, 0.2, 100, 170, 25, 200, 20);
        priceCatalogFlightRepository.save(priceCatalogFlight);

        // Save discount for multiple flight tickets
        List<DiscountForMultipleFlightTickets> discounts = Arrays.asList(
                new DiscountForMultipleFlightTickets(0.1, 5),
                new DiscountForMultipleFlightTickets(0.2, 10)
        );
        discountForMultipleFlightTicketsRepository.saveAll(discounts);

        // Save price catalog flight discount for multiple tickets
        priceCatalogFlight.setDiscountForMultipleTickets(discounts);
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
        for (Flight flight : flights) {
            flightsKieSession.insert(flight);
        }
    }
}
