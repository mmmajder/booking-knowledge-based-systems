package com.ftn.sbnz.backward.model.models.hotel;

import com.ftn.sbnz.backward.model.models.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
@AllArgsConstructor
public class HotelEvent {
    private Hotel hotel;
    private HotelEventType hotelEventType;
    private User user;
}
