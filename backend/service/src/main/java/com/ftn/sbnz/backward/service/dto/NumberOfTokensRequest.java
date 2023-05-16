package com.ftn.sbnz.backward.service.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class NumberOfTokensRequest {

    private double numberOfTokens;
}
