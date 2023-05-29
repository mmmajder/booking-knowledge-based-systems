package com.ftn.sbnz.backward.model.models.hotel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
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
    private int roomNumber;
    private RoomType roomType;
    private int numberOfAdults;
    private int numberOfChildren;
    @OneToMany
    private List<RoomOccupancy> roomOccupancies;

    public HotelRoom(Long hotelId, int roomNumber, RoomType roomType, int numberOfAdults, int numberOfChildren) {
        this.hotelId = hotelId;
        this.roomNumber = roomNumber;
        this.roomType = roomType;
        this.numberOfAdults = numberOfAdults;
        this.numberOfChildren = numberOfChildren;
        this.roomOccupancies = new ArrayList<>();
    }
}
