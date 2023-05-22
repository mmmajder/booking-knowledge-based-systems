package com.ftn.sbnz.backward.model.models.hotel;

import lombok.*;

import java.util.Date;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
public class SearchHotelsParams {
    private String name;
    private String destination;
    private Date startDate;
    private Date endDate;
    private int numAdults;
    private int numChildren;
    private double reviewScore;
    private List<Integer> starRating;
    private int priceRangeStart;
    private int priceRangeEnd;
    private int distanceStart;
    private int distanceEnd;
    private List<String> facilities;
    private List<String> meals;
}
