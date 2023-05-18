package com.ftn.sbnz.backward.service.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.UUID;

@Data
@AllArgsConstructor
public class PropertyDetailsResponse {
    private UUID id;
    private String name;
    private String address;
}
