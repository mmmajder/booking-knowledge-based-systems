package com.ftn.sbnz.model.model.flight;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Set;
@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class PlaneBusyness {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true)
    private long id;

    private Plane plane;
    private Set<FlightTickets> tickets;
}
