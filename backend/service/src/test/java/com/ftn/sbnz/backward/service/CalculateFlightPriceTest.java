package com.ftn.sbnz.backward.service;

import com.ftn.sbnz.backward.model.models.Customer;
import com.ftn.sbnz.backward.model.models.events.AdditionalServicesRequestEvent;
import com.ftn.sbnz.backward.model.models.events.PreviewFlightEvent;
import com.ftn.sbnz.backward.model.models.flight.*;
import org.drools.decisiontable.ExternalSpreadsheetCompiler;
import org.junit.jupiter.api.Test;
import org.kie.api.KieServices;
import org.kie.api.builder.Message;
import org.kie.api.builder.Results;
import org.kie.api.io.ResourceType;
import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
import org.kie.internal.utils.KieHelper;

import java.io.InputStream;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Arrays;
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
        flight1.setId(1L);

        PriceCatalogFlight priceCatalogFlight = new PriceCatalogFlight();
        priceCatalogFlight.setEconomyPrice(100);
        priceCatalogFlight.setPremiumPrice(200);
        priceCatalogFlight.setBusinessPrice(150);
        priceCatalogFlight.setFirstClassPrice(170);
        priceCatalogFlight.setDiscountForChildren(0.2);

        LuggagePrice luggagePrice1 = new LuggagePrice(1L, 7, 10);
        LuggagePrice luggagePrice2 = new LuggagePrice(2L, 12, 20);
        LuggagePrice luggagePrice3 = new LuggagePrice(3L, 15, 30);
        priceCatalogFlight.setLuggagePrices(new ArrayList<>(Arrays.asList(luggagePrice1, luggagePrice2, luggagePrice3)));

        priceCatalogFlight.setPriorityBoardingPrice(20);
        priceCatalogFlight.setChooseSeatPrice(30);
        priceCatalogFlight.setHolidaysPriceIncreaseInPercent(25);

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


        AdditionalServicesRequestEvent additionalServicesRequestEvent = new AdditionalServicesRequestEvent();
        additionalServicesRequestEvent.setFlight(flight1);
        additionalServicesRequestEvent.setLuggageWeight(8);
        additionalServicesRequestEvent.setPriorityBoarding(true);
        additionalServicesRequestEvent.setSpecificSeats(true);
        additionalServicesRequestEvent.setSeats(null);
        additionalServicesRequestEvent.setExecutionTime(Date.from(Instant.now()));


        ksession.insert(previewFlightEvent);
        ksession.insert(additionalServicesRequestEvent);
        long ruleFireCount = ksession.fireAllRules();
        System.out.println(ruleFireCount);
        System.out.println(previewFlightEvent.getBasePrice());
        System.out.println(additionalServicesRequestEvent.getAdditionalServicesPrice());



//        InputStream template = CalculateFlightPriceTest.class.getResourceAsStream("/loyalty/loyalty-program.drt");
//        InputStream data = CalculateFlightPriceTest.class.getResourceAsStream("/loyalty/flightLoyaltyProgram.xls");
//
//        ExternalSpreadsheetCompiler converter = new ExternalSpreadsheetCompiler();
//        String drl = converter.compile(data, template, 3, 2);
//
//        System.out.println(drl);
    }
}
