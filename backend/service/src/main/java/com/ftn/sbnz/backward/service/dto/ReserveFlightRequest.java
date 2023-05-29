package com.ftn.sbnz.backward.service.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReserveFlightRequest {
    private double totalPrice;
    private List<FlightResponse> flights;
}
