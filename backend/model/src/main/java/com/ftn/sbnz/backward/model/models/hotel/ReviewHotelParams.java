package com.ftn.sbnz.backward.model.models.hotel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@AllArgsConstructor
@Getter
@Setter
public class ReviewHotelParams {
    private Long hotelId;
    private String userEmail;
    private String comment;
    private int stars;
}
