package com.ftn.sbnz.backward.model.models.enums;

public enum AuthProvider {
    LOCAL("local"), GOOGLE("google"), FACEBOOK("facebook");
    private String providerType;
    public String getProviderType() {
        return providerType;
    }
    AuthProvider(final String providerType) {
        this.providerType = providerType;
    }
}
