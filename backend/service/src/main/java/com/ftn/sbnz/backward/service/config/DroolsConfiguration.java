package com.ftn.sbnz.backward.service.config;

import com.ftn.sbnz.backward.model.models.flight.ClassificationTemplateModel;
import com.ftn.sbnz.backward.service.exception.BadRequestException;
import org.drools.template.ObjectDataCompiler;
import org.kie.api.KieBase;
import org.kie.api.KieBaseConfiguration;
import org.kie.api.KieServices;
import org.kie.api.builder.KieBuilder;
import org.kie.api.builder.KieFileSystem;
import org.kie.api.builder.Message;
import org.kie.api.builder.Results;
import org.kie.api.conf.EventProcessingOption;
import org.kie.api.io.ResourceType;
import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
import org.kie.internal.io.ResourceFactory;
import org.kie.internal.utils.KieHelper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;


@Configuration
public class DroolsConfiguration {
    @Bean
    public KieSession hotelsKieSession() {
        KieServices ks = KieServices.Factory.get();
        KieContainer kc = ks.newKieClasspathContainer();
        return kc.newKieSession("searchhotelssession");
    }

    @Bean
    public KieSession flightsKieSession() throws Exception {
        KieServices ks = KieServices.Factory.get();
        KieBaseConfiguration kieBaseConfiguration = ks.newKieBaseConfiguration();
        kieBaseConfiguration.setOption(EventProcessingOption.STREAM);

        String loyaltyRules = renderFlightLoyaltyTemplate();
        KieFileSystem kieFileSystem = ks.newKieFileSystem();
        kieFileSystem
                .write(ResourceFactory.newClassPathResource("flightPrice/flight-price.drl"))
                .write(ResourceFactory.newClassPathResource("flightTransfer/flight-transfer.drl"))
                .write("src/main/resources/generated-loyalty.drl", loyaltyRules);


        KieBuilder kieBuilder = ks.newKieBuilder(kieFileSystem);
        kieBuilder.buildAll();

        if (kieBuilder.getResults().hasMessages(Message.Level.ERROR)) {
            // Handle build errors
            System.out.println(kieBuilder.getResults().toString());
            throw new Exception("Error in rules");
        }

        KieContainer kc = ks.newKieContainer(ks.getRepository().getDefaultReleaseId());
        KieBase kieBase = kc.newKieBase(kieBaseConfiguration);
        return kieBase.newKieSession();
    }

//    @Bean
//    public KieSession flightPriceKieSession() {
//        KieServices ks = KieServices.Factory.get();
//        KieContainer kc = ks.newKieClasspathContainer();
//        return kc.newKieSession("flightpricesession");
//    }

    public String renderFlightLoyaltyTemplate() throws IOException {
        InputStream template = DroolsConfiguration.class.getResourceAsStream("/loyalty/loyalty-program.drt");

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

//        String drlFilePath = "loyalty/generated.drl";
//        Files.write(Paths.get(drlFilePath), drl.getBytes());
        return drl;
//        return this.createKieSessionFromDRL(drl);
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
//    @PostConstruct
//    private void fillData() {
//        List<Airport> airports = Arrays.asList(
//                new Airport("BEG", "Serbia", "Belgrad (Beograd) - Belgrade Nikola Tesla International"),
//                new Airport("SOF", "Bulgaria", "Sofia - Vrazhdebna"),
//                new Airport("INI", "Serbia", "Nis"),
//                new Airport("IST", "Turkey", "Istanbul - Istanbul Atatürk Airport"),
//                new Airport("AMS", "Netherlands", "Amsterdam - Amsterdam Airport Schiphol"),
//                new Airport("PAR", "France", "Paris"),
//                new Airport("MUC", "Germany", "Muenchen (Munich) - Franz Josef Strauss"),
//                new Airport("AAR", "Denmark", "Aarhus"),
//                new Airport("ZRH", "Switzerland", "Zurich (Zürich) - Kloten")
//        );
//        airportRepository.saveAll(airports);
//
//        // Save price catalog flight
//        PriceCatalogFlight priceCatalogFlight = new PriceCatalogFlight(150, 30, 0.2, 100, 170, 25, 200, 20);
//        priceCatalogFlightRepository.save(priceCatalogFlight);
//
//        // Save discount for multiple flight tickets
//        List<DiscountForMultipleFlightTickets> discounts = Arrays.asList(
//                new DiscountForMultipleFlightTickets(0.1, 5),
//                new DiscountForMultipleFlightTickets(0.2, 10)
//        );
//        discountForMultipleFlightTicketsRepository.saveAll(discounts);
//
//        // Save price catalog flight discount for multiple tickets
//        priceCatalogFlight.setDiscountForMultipleTickets(discounts);
//        priceCatalogFlightRepository.save(priceCatalogFlight);
//
//        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS");
//        List<Flight> flights = Arrays.asList(
//                new Flight(airports.get(0), airports.get(2), LocalDateTime.parse("2023-07-01T11:19:42.120", formatter).toInstant(ZoneOffset.UTC), LocalDateTime.parse("2023-07-01T13:19:42.120", formatter).toInstant(ZoneOffset.UTC), "Air Serbia", priceCatalogFlight),
//                new Flight(airports.get(2), airports.get(3), LocalDateTime.parse("2023-07-01T13:59:42.120", formatter).toInstant(ZoneOffset.UTC), LocalDateTime.parse("2023-07-01T15:19:42.120", formatter).toInstant(ZoneOffset.UTC), "Air Serbia", priceCatalogFlight),
//                new Flight(airports.get(2), airports.get(3), LocalDateTime.parse("2023-07-01T14:59:42.120", formatter).toInstant(ZoneOffset.UTC), LocalDateTime.parse("2023-07-01T15:19:42.120", formatter).toInstant(ZoneOffset.UTC), "Turkish Airlines", priceCatalogFlight),
//                new Flight(airports.get(3), airports.get(5), LocalDateTime.parse("2023-07-01T16:19:42.120", formatter).toInstant(ZoneOffset.UTC), LocalDateTime.parse("2023-07-01T19:19:42.120", formatter).toInstant(ZoneOffset.UTC), "Turkish Airlines", priceCatalogFlight),
//                new Flight(airports.get(2), airports.get(4), LocalDateTime.parse("2023-07-01T13:59:42.120", formatter).toInstant(ZoneOffset.UTC), LocalDateTime.parse("2023-07-01T15:19:42.120", formatter).toInstant(ZoneOffset.UTC), "Air Serbia", priceCatalogFlight),
//                new Flight(airports.get(4), airports.get(5), LocalDateTime.parse("2023-07-01T16:19:42.120", formatter).toInstant(ZoneOffset.UTC), LocalDateTime.parse("2023-07-01T19:19:42.120", formatter).toInstant(ZoneOffset.UTC), "Air France", priceCatalogFlight),
//                new Flight(airports.get(0), airports.get(1), LocalDateTime.parse("2023-07-01T16:19:42.120", formatter).toInstant(ZoneOffset.UTC), LocalDateTime.parse("2023-07-01T19:19:42.120", formatter).toInstant(ZoneOffset.UTC), "Air Serbia", priceCatalogFlight),
//                new Flight(airports.get(5), airports.get(6), LocalDateTime.parse("2023-07-01T20:19:42.120", formatter).toInstant(ZoneOffset.UTC), LocalDateTime.parse("2023-07-01T21:19:42.120", formatter).toInstant(ZoneOffset.UTC), "Air France", priceCatalogFlight)
//        );
//        flightRepository.saveAll(flights);
//
//        System.out.println("CAO OVDE MIKI");
//        System.out.println(flights);
//        for(Flight flight: flights) {
//            flightsKieSession().insert(flight);
//        }
//    }
}
