package com.ftn.sbnz.backward.model.models.hotel;

public enum ServiceTypes {
    BED_AND_BREAKFAST("Bed and breakfast"),
    HALF_BOARD("Half board"),
    FULL_BOARD("Full board"),
    ALL_INCLUSIVE("All inclusive");

    public final String label;

    private ServiceTypes(String label) {
        this.label = label;
    }
}
