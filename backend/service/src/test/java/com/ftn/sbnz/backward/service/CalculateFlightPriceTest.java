package com.ftn.sbnz.backward.service;

import com.ftn.sbnz.backward.model.models.Customer;
import com.ftn.sbnz.backward.model.models.events.PreviewFlightEvent;
import com.ftn.sbnz.backward.model.models.flight.*;
import org.junit.jupiter.api.Test;
import org.kie.api.KieServices;
import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;

import java.time.Instant;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class CalculateFlightPriceTest {

    @Test
    public void flightPriceTest() {
        KieServices ks = KieServices.Factory.get();
        KieContainer kc = ks.newKieClasspathContainer();
        KieSession ksession = kc.newKieSession("flightpricesession");

        Airport airport1 = new Airport();
        airport1.setId(1);
        airport1.setName("BG");
        Airport airport2 = new Airport();
        airport2.setId(2);
        airport2.setName("NIS");

        Flight flight1 = new Flight();
        flight1.setDepartureAirport(airport1);
        flight1.setArrivalAirport(airport2);
        flight1.setDepartureTime(Instant.parse("2023-07-01T11:19:42.12Z"));
        flight1.setArrivalTime(Instant.parse("2023-07-01T13:19:42.12Z"));

        PriceCatalogFlight priceCatalogFlight = new PriceCatalogFlight();
        priceCatalogFlight.setEconomyPrice(100);
        priceCatalogFlight.setPremiumPrice(200);
        priceCatalogFlight.setBusinessPrice(150);
        priceCatalogFlight.setFirstClassPrice(170);
        priceCatalogFlight.setDiscountForChildren(0.2);

        List<DiscountForMultipleFlightTickets> discountForMultipleFlightTickets = new ArrayList<>();
        DiscountForMultipleFlightTickets discountForMultipleFlightTickets1 = new DiscountForMultipleFlightTickets();
        discountForMultipleFlightTickets1.setDiscount(0.1);
        discountForMultipleFlightTickets1.setNumberOfTicketsThreshold(5);
        DiscountForMultipleFlightTickets discountForMultipleFlightTickets2 = new DiscountForMultipleFlightTickets();
        discountForMultipleFlightTickets2.setDiscount(0.2);
        discountForMultipleFlightTickets2.setNumberOfTicketsThreshold(10);
        discountForMultipleFlightTickets.add(discountForMultipleFlightTickets1);
        discountForMultipleFlightTickets.add(discountForMultipleFlightTickets2);
        priceCatalogFlight.setDiscountForMultipleTickets(discountForMultipleFlightTickets);

        flight1.setPriceCatalog(priceCatalogFlight);


        Customer customer = new Customer();
        customer.setNumberOfTokens(5000);
        customer.setCity("Mali Idjos");
        customer.setActive(true);
        customer.setName("Petar");
        customer.setSurname("Petrovic");
        customer.setPhoneNumber("+381 1235644");
        customer.setEmail("petar@gmail.com");

        PreviewFlightEvent previewFlightEvent = new PreviewFlightEvent();
        previewFlightEvent.setFlight(flight1);
        previewFlightEvent.setCustomer(customer);
        previewFlightEvent.setExecutionTime(Date.from(Instant.now()));
        previewFlightEvent.setNumberOfAdults(4);
        previewFlightEvent.setNumberOfChildren(1);
        previewFlightEvent.setSeatClass(SeatClass.BUSINESS);

        ksession.insert(previewFlightEvent);
        long ruleFireCount = ksession.fireAllRules();
        System.out.println(ruleFireCount);
        System.out.println(previewFlightEvent.getBasePrice().getTotalPrice());

    }
}
