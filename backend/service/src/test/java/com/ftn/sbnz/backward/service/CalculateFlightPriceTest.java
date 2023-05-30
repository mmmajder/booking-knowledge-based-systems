package com.ftn.sbnz.backward.service;

import com.ftn.sbnz.backward.model.models.Customer;
import com.ftn.sbnz.backward.model.models.Payment;
import com.ftn.sbnz.backward.model.models.events.AdditionalServicesRequestEvent;
import com.ftn.sbnz.backward.model.models.events.PreviewFlightEvent;
import com.ftn.sbnz.backward.model.models.flight.*;
import org.drools.decisiontable.ExternalSpreadsheetCompiler;
import org.drools.template.DataProvider;
import org.drools.template.ObjectDataCompiler;
import org.drools.template.objects.ArrayDataProvider;
import org.junit.jupiter.api.Test;
import org.kie.api.KieBaseConfiguration;
import org.kie.api.KieServices;
import org.kie.api.builder.Message;
import org.kie.api.builder.Results;
import org.kie.api.conf.EventProcessingOption;
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
        additionalServicesRequestEvent.setSeats(new ArrayList<>(Arrays.asList(new PlaneSeat(1L, 1, SeatClass.BUSINESS))));
        additionalServicesRequestEvent.setExecutionTime(Date.from(Instant.now()));
        additionalServicesRequestEvent.setCustomer(customer);

        ksession.insert(previewFlightEvent);
        ksession.insert(additionalServicesRequestEvent);


        Payment payment = new Payment();
        payment.setId(1L);
        payment.setExecutionTime(Date.from(Instant.now()));
        payment.setEmail(customer.getEmail());
        payment.setTotalPrice(300.0);
        payment.setIsAcceptedPayment(true);

        Payment payment2 = new Payment();
        payment2.setId(2L);
        payment2.setExecutionTime(Date.from(Instant.now()));
        payment2.setEmail(customer.getEmail());
        payment2.setTotalPrice(300.0);
        payment2.setIsAcceptedPayment(true);

        ksession.insert(customer);
        ksession.insert(payment);
        ksession.insert(payment2);

        long ruleFireCount = ksession.fireAllRules();
        System.out.println(ruleFireCount);
        System.out.println(previewFlightEvent.getBasePrice());
        System.out.println(additionalServicesRequestEvent.getAdditionalServicesPrice());
    }

    @Test
    public void templateTest() {
        InputStream template = CalculateFlightPriceTest.class.getResourceAsStream("/loyalty/loyalty-program.drt");

        List<ClassificationTemplateModel> data = new ArrayList<ClassificationTemplateModel>();

        data.add(new ClassificationTemplateModel(500, 1000 , 3, 0.05, "BRONZE"));
        data.add(new ClassificationTemplateModel(1000, 2000 , 6, 0.05, "BRONZE"));
        data.add(new ClassificationTemplateModel(2000, 4000 , 12, 0.05, "BRONZE"));

        data.add(new ClassificationTemplateModel(1000, 2000 , 3, 0.10, "SILVER"));
        data.add(new ClassificationTemplateModel(2000, 4000 , 6, 0.10, "SILVER"));
        data.add(new ClassificationTemplateModel(4000, 8000 , 12, 0.10, "SILVER"));

        data.add(new ClassificationTemplateModel(2000, 4000 , 3, 0.15, "GOLD"));
        data.add(new ClassificationTemplateModel(4000, 8000 , 6, 0.15, "GOLD"));
        data.add(new ClassificationTemplateModel(8000, 999999999 , 12, 0.15, "GOLD"));


        ObjectDataCompiler converter = new ObjectDataCompiler();
        String drl = converter.compile(data, template);

        System.out.println(drl);

        KieSession ksession = this.createKieSessionFromDRL(drl);

        this.doTest(ksession);

    }

    private void doTest(KieSession ksession) {
    }


    private KieSession createKieSessionFromDRL(String drl){
        KieHelper kieHelper = new KieHelper();
        kieHelper.addContent(drl, ResourceType.DRL);

        Results results = kieHelper.verify();

        if (results.hasMessages(Message.Level.WARNING, Message.Level.ERROR)){
            List<Message> messages = results.getMessages(Message.Level.WARNING, Message.Level.ERROR);
            for (Message message : messages) {
                System.out.println("Error: "+message.getText());
            }

            throw new IllegalStateException("Compilation errors were found. Check the logs.");
        }

        KieServices kieServices = KieServices.Factory.get();
        KieBaseConfiguration kieBaseConfig = kieServices.newKieBaseConfiguration();
        kieBaseConfig.setOption(EventProcessingOption.STREAM); // Set the KieBase to run in "STREAM" mode

        return kieHelper.build(kieBaseConfig).newKieSession();
    }
}
