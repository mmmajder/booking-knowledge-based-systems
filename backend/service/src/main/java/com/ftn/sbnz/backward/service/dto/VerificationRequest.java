package com.ftn.sbnz.backward.service.dto;

import lombok.Data;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

@Data
public class VerificationRequest {
    @NotNull(message = "Code is not provided")
    private String code;
}
