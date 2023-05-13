package com.ftn.sbnz.backward.model.models.hotel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Map;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class HotelOccupancy {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true)
    private Long id;

//    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
//    @MapKeyJoinColumn(name = "hotel_room_id")
//    private Map<HotelRoom, RoomOccupancy> occupancies;

    @OneToMany(cascade = CascadeType.ALL)
//    @JoinTable(name = "room_occupancy_mapping",
//            joinColumns = {@JoinColumn(name = "order_id", referencedColumnName = "id")},
//            inverseJoinColumns = {@JoinColumn(name = "item_id", referencedColumnName = "id")})
//    @MapKeyJoinColumn(name = "seller_id")
    private Map<HotelRoom, RoomOccupancy> occupancies;
}
