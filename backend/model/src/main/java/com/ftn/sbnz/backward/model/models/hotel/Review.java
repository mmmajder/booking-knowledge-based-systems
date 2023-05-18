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
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true)
    private Long id;
    @ManyToOne
    private User user;
    private int rating;
    private String comment;
    private Date posted;
}
