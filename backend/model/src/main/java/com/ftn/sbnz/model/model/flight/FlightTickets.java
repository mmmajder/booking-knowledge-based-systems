package com.ftn.sbnz.model.model.flight;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class FlightTickets {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true)
    private long id;
    private int row;
    private int col;
    private SeatClass seatClass;
    private String name;
    private String surname;
    private String responsibleUser;
}
