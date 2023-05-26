package com.ftn.sbnz.backward.model.models.hotel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Data
@AllArgsConstructor
@Getter
@Setter
public class ReserveHotelParams {
    private Long hotelId;
    private String userEmail;
    private Date start;
    private Date end;
    private int numberOfAdults;
    private int numberOfChildren;
}
