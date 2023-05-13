package com.ftn.sbnz.backward.model.models.flight;

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

    @OneToOne
    private Plane plane;
    @OneToMany
    private Set<FlightTickets> tickets;
}
