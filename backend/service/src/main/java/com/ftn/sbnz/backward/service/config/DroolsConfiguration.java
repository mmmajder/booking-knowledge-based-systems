package com.ftn.sbnz.backward.service.config;

import com.ftn.sbnz.backward.model.models.flight.ClassificationTemplateModel;
import com.ftn.sbnz.backward.model.models.hotel.LastMinute;
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

import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;


@Configuration
public class DroolsConfiguration {
    @Bean
    public KieSession hotelsKieSession() throws Exception {
        KieServices ks = KieServices.Factory.get();
        KieBaseConfiguration kieBaseConfiguration = ks.newKieBaseConfiguration();
        kieBaseConfiguration.setOption(EventProcessingOption.STREAM);

        String lastMinute = renderLastMinuteTemplate();
        KieFileSystem kieFileSystem = ks.newKieFileSystem();
        kieFileSystem
                .write(ResourceFactory.newClassPathResource("searchHotels/search-hotels.drl"))
                .write("src/main/resources/lastMinute.drl", lastMinute);

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

    public String renderLastMinuteTemplate() {
        InputStream template = DroolsConfiguration.class.getResourceAsStream("/templates/last-minute.drt");

        List<LastMinute> data = new ArrayList<>();

        data.add(new LastMinute(1L, true, 0, 5, 15.0));
        data.add(new LastMinute(2L, true, 6, 15, 10.0));
        data.add(new LastMinute(3L, true, 16, 25, 5.0));
        data.add(new LastMinute(4L, true, 25, 300, 0.0));
        data.add(new LastMinute(5L, false, 0, 6, 20.0));
        data.add(new LastMinute(6L, false, 6, 15, 15.0));
        data.add(new LastMinute(7L, false, 16, 25, 10.0));
        data.add(new LastMinute(8L, false, 25, 300, 0.0));

        ObjectDataCompiler converter = new ObjectDataCompiler();
        String drl = converter.compile(data, template);

        System.out.println(drl);

        return drl;
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

    public String renderFlightLoyaltyTemplate() {
        InputStream template = DroolsConfiguration.class.getResourceAsStream("/loyalty/loyalty-program.drt");

        List<ClassificationTemplateModel> data = new ArrayList<>();

        data.add(new ClassificationTemplateModel(500, 1000, 3, 0.05, "BRONZE"));
        data.add(new ClassificationTemplateModel(1000, 2000, 6, 0.05, "BRONZE"));
        data.add(new ClassificationTemplateModel(2000, 4000, 12, 0.05, "BRONZE"));

        data.add(new ClassificationTemplateModel(1000, 2000, 3, 0.10, "SILVER"));
        data.add(new ClassificationTemplateModel(2000, 4000, 6, 0.10, "SILVER"));
        data.add(new ClassificationTemplateModel(4000, 8000, 12, 0.10, "SILVER"));

        data.add(new ClassificationTemplateModel(2000, 4000, 3, 0.15, "GOLD"));
        data.add(new ClassificationTemplateModel(4000, 8000, 6, 0.15, "GOLD"));
        data.add(new ClassificationTemplateModel(8000, 999999999, 12, 0.15, "GOLD"));


        ObjectDataCompiler converter = new ObjectDataCompiler();
        String drl = converter.compile(data, template);

        System.out.println(drl);

        return drl;
    }

    private KieSession createKieSessionFromDRL(String drl) {
        KieHelper kieHelper = new KieHelper();
        kieHelper.addContent(drl, ResourceType.DRL);

        Results results = kieHelper.verify();

        if (results.hasMessages(Message.Level.WARNING, Message.Level.ERROR)) {
            List<Message> messages = results.getMessages(Message.Level.WARNING, Message.Level.ERROR);
            for (Message message : messages) {
                System.out.println("Error: " + message.getText());
            }

            throw new IllegalStateException("Compilation errors were found. Check the logs.");
        }

        KieServices kieServices = KieServices.Factory.get();
        KieBaseConfiguration kieBaseConfig = kieServices.newKieBaseConfiguration();
        kieBaseConfig.setOption(EventProcessingOption.STREAM); // Set the KieBase to run in "STREAM" mode

        return kieHelper.build(kieBaseConfig).newKieSession();
    }
}
