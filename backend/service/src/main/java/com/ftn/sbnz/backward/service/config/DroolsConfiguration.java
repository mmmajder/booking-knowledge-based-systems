package com.ftn.sbnz.backward.service.config;

import com.ftn.sbnz.backward.model.models.flight.ClassificationTemplateModel;
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

import java.io.IOException;
import java.io.InputStream;
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

        return drl;
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
