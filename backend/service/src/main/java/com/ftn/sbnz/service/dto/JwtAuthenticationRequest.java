package com.ftn.sbnz.service.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class JwtAuthenticationRequest {
    @Email
    @NotEmpty
    private String email;
    @NotEmpty
    private String password;
}
