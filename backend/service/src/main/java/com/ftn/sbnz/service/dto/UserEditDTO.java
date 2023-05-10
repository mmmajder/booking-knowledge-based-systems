package com.ftn.sbnz.service.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class UserEditDTO {
    private String name;
    private String surname;
    private String city;
    private String phoneNumber;
}
