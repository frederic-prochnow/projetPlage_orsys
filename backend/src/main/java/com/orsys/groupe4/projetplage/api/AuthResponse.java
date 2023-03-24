package com.orsys.groupe4.projetplage.api;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class AuthResponse {
    private String email;
    private String accessToken;
    
    public AuthResponse() {
    }
    
    public AuthResponse(String email, String accessToken) {
        this.email = email;
        this.accessToken = accessToken;
    }
}
