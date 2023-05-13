package com.ftn.sbnz.backward.model.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;

@EqualsAndHashCode(callSuper = true)
@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Customer extends User {
    private double numberOfTokens;
    private boolean isActive;

    public Customer(String email) {
        super(email);
    }

    public Customer(String email, boolean isActive) {
        super(email);
        this.isActive = isActive;
    }

    public Customer(String email, Boolean blocked, boolean isActive) {
        super(email, blocked);
        this.isActive = isActive;
    }
}
