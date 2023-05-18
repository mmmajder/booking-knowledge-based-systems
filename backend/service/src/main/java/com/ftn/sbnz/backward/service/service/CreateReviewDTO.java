package com.ftn.sbnz.backward.service.service;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateReviewDTO {
    private String comment;
    private int rating;
    private long hotelId;
    private String userEmail;
}