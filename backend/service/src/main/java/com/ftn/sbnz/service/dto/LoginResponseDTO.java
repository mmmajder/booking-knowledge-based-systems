package com.ftn.sbnz.service.dto;

import com.ftn.sbnz.model.enums.UserRole;
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
