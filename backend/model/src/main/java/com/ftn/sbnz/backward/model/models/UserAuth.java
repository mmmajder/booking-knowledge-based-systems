package com.ftn.sbnz.backward.model.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class UserAuth {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true)
    private long id;

    private String verificationCode;
    private String resetPasswordCode;
    private Boolean isEnabled;
    private Timestamp lastPasswordSet;
    private Boolean deleted = false;
    @ManyToMany
    private List<Role> roles;
}
