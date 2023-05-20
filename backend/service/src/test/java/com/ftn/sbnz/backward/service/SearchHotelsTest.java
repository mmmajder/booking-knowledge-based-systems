package com.ftn.sbnz.backward.service;

import com.ftn.sbnz.backward.model.models.LastMinute;
import com.ftn.sbnz.backward.service.repository.HotelRepository;
import org.drools.template.ObjectDataCompiler;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.kie.api.builder.Message;
import org.kie.api.builder.Results;
import org.kie.api.io.ResourceType;
import org.kie.api.runtime.KieSession;
import org.kie.internal.utils.KieHelper;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

@ExtendWith(MockitoExtension.class)
public class SearchHotelsTest {

    @Mock
    private HotelRepository hotelRepository;

    @Test
    public void testLastMinute() {
        InputStream template = SearchHotelsTest.class.getResourceAsStream("/templates/last-minute.drt");

        List<LastMinute> data = new ArrayList<>();

        data.add(new LastMinute(1L, true, 5, 0, 15.0));
        data.add(new LastMinute(2L, true, 6, 15, 10.0));
        data.add(new LastMinute(3L, true, 16, 25, 5.0));
        data.add(new LastMinute(4L, false, 5, 0, 20.0));
        data.add(new LastMinute(5L, false, 6, 15, 15.0));
        data.add(new LastMinute(6L, false, 16, 25, 10.0));

        ObjectDataCompiler converter = new ObjectDataCompiler();
        String drl = converter.compile(data, template);

        System.out.println(drl);
    }
//
//    public void fillHotels() {
//        List<Hotel> hotels = hotelRepository.findAll();
//
//        KieSession ksession = this.createKieSessionFromDRL(drl);
//        ksession.insert(hotels);
//        ksession.fireAllRules();
//
//        assertEquals(20, hotels.size());
//    }

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

        return kieHelper.build().newKieSession();
    }
}
