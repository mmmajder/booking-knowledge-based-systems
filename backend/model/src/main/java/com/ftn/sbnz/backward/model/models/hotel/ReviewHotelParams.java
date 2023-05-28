package com.ftn.sbnz.backward.model.models.hotel;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ReviewHotelParams {
    private Long hotelId;
    private String userEmail;
    private String comment;
    private int stars;
}
