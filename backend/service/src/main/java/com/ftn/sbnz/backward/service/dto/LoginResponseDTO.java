package com.ftn.sbnz.backward.service.dto;

import com.ftn.sbnz.backward.model.models.enums.UserRole;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class LoginResponseDTO {
    public UserTokenState token;
    public UserRole userRole;
}
