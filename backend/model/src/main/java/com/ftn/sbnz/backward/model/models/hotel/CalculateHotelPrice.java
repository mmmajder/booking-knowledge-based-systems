package com.ftn.sbnz.backward.model.models.hotel;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
public class CalculateHotelPrice {
    private Hotel hotel;
    private SearchHotelsParams searchHotelsParams;
    private double totalPrice;
}