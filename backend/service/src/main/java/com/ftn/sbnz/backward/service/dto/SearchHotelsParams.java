package com.ftn.sbnz.backward.service.dto;

import lombok.*;

import java.util.Date;

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
    private int[] reviewScore;
    private int[] starRating;
    private int priceRangeStart;
    private int priceRangeEnd;
    private int distanceStart;
    private int distanceEnd;
    private String[] facilities;
    private String[] meals;
}
