package com.ftn.sbnz.backward.model.models.flight;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.kie.api.definition.type.Position;

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

    @ManyToOne
    @Position(0)
    private Airport departureAirport;
    @ManyToOne
    @Position(1)
    private Airport arrivalAirport;
    @Position(2)
    private Instant departureTime;
    @Position(3)
    private Instant arrivalTime;

    @ManyToOne
    private PriceCatalogFlight priceCatalog;

    @OneToOne
    private PlaneBusyness planeBusyness;

    private String airline;


    public Flight(Airport departureAirport, Airport arrivalAirport, Instant departureTime, Instant arrivalTime, String airline, PriceCatalogFlight priceCatalog) {
        this.departureAirport = departureAirport;
        this.arrivalAirport = arrivalAirport;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
        this.priceCatalog = priceCatalog;
        this.airline = airline;
    }

    public Flight(Airport departureAirport, Airport arrivalAirport) {
        this.departureAirport = departureAirport;
        this.arrivalAirport = arrivalAirport;
    }

    @Override
    public String toString() {
        return "Flight{" +
                "departureAirport=" + departureAirport.getCode() +
                ", arrivalAirport=" + arrivalAirport.getCode() +
                ", id=" + id +
                '}';
    }
}
