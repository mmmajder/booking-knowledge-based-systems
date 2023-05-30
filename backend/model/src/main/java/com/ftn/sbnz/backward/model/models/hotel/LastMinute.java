package com.ftn.sbnz.backward.model.models.hotel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Id;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LastMinute {
    @Id
    private Long id;
    private boolean holiday;
    private int daysStart;
    private int daysEnd;
    private int daysBefore;
    private double discount;
    private double totalDiscount;
    private CalculateHotelPrice calculateHotelPrice;

    public LastMinute(Long id, boolean holiday, int daysStart, int daysEnd, double discount) {
        this.id = id;
        this.holiday = holiday;
        this.daysStart = daysStart;
        this.daysEnd = daysEnd;
        this.discount = discount;
    }

    public LastMinute(boolean holiday, int daysBefore, CalculateHotelPrice calculateHotelPrice) {
        this.holiday = holiday;
        this.daysBefore = daysBefore;
        this.calculateHotelPrice = calculateHotelPrice;
    }
}
