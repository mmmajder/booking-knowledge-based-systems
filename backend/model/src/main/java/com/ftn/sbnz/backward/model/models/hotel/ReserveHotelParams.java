package com.ftn.sbnz.backward.model.models.hotel;

import lombok.*;

import java.util.Date;

@Data
@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class ReserveHotelParams {
    private Long hotelId;
    private String userEmail;
    private Date start;
    private Date end;
    private int numberOfAdults;
    private int numberOfChildren;
}
