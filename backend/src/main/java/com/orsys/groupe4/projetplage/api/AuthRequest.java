package com.orsys.groupe4.projetplage.api;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@ToString
public class AuthRequest {
    @NotNull
    @Email
    @Length(min = 5, max = 50)
    private String email;
    
    @NotNull
    @Length(min = 5, max = 10)
    private String password;
    
}
