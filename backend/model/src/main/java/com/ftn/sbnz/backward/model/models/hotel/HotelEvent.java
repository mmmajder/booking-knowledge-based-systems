package com.ftn.sbnz.backward.model.models.hotel;

import com.ftn.sbnz.backward.model.models.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.kie.api.definition.type.Role;

import java.io.Serializable;

@Data
@Getter
@Setter
@AllArgsConstructor
@Role(Role.Type.EVENT)
public class HotelEvent implements Serializable {
    private Hotel hotel;
    private HotelEventType hotelEventType;
    private User user;

    public void addPoints(Integer points) {
        System.out.println("DODAJEM " + points);
        this.hotel.addPoints(points);
    }

    public void addPoints(Long points) {
        System.out.println("DODAJEM " + points);
        this.hotel.addPoints(points);
    }
}
