package com.ftn.sbnz.model.model.flight;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.Instant;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Flight {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true)
    private Long id;

    private Airport departureAirport;
    private Airport arrivalAirport;

    private Instant departureTime;
    private Instant arrivalTime;

    private PriceCatalog priceCatalog;

    private PlaneBusyness planeBusyness;

}
