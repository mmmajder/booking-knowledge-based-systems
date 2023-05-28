package com.ftn.sbnz.backward.model.models.hotel;

import com.ftn.sbnz.backward.model.models.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class RoomOccupancy {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true)
    private Long id;

    private Date startDate;
    private Date endDate;
    @OneToOne
    private User user;
}
