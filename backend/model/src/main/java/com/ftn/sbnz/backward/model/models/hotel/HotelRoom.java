package com.ftn.sbnz.backward.model.models.hotel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class HotelRoom {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true)
    private Long id;

    private Long hotelId;
    private String roomNumber;
    private RoomType roomType;
    private int numberOfAdults;
    private int numberOfChildren;
    @OneToMany
    private List<RoomOccupancy> roomOccupancies;
}
