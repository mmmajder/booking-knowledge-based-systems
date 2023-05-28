package com.ftn.sbnz.backward.model.models.hotel;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
public class CheckRoomAvailability {
    private Hotel hotel;
    private ReserveHotelParams reserveHotelParams;
    private HotelRoom hotelRoom;
}