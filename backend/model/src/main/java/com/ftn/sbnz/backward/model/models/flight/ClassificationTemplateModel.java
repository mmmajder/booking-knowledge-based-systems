package com.ftn.sbnz.backward.model.models.flight;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ClassificationTemplateModel {
    private double minMoney;
    private double maxMoney;
    private int timeInMonths;
    private double discount;
    private String category;

}
