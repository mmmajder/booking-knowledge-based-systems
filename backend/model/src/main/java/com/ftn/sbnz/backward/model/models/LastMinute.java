package com.ftn.sbnz.backward.model.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class LastMinute {
    @Id
    private Long id;
    private boolean holiday;
    private int daysStart;
    private int daysEnd;
    private double discount;
}
