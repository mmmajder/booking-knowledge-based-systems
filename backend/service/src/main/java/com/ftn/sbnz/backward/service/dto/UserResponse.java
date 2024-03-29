package com.ftn.sbnz.backward.service.dto;

import com.ftn.sbnz.backward.model.models.enums.UserRole;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserResponse {
    private String email;
    private String name;
    private String surname;
    private String city;
    private String phoneNumber;
    private UserRole role;
    private boolean blocked;
}
