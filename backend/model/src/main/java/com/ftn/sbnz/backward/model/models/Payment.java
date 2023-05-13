package com.ftn.sbnz.backward.model.models;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true)
    private long id;

    private String email;
    private Double totalPrice;
    private Boolean isAcceptedPayment;
    private Boolean deleted = false;
}
