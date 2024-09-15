package com.orsys.groupe4.projetplage.dto;

import com.orsys.groupe4.projetplage.business.Pays;
import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@Data
public class UtilisateurDto {
    
    private String nom;
    
    private String prenom;
    
    @Email
    @NotNull
    private String email;
    
    @NotNull
    private String motDePasse;
    
    private Pays pays;
}
