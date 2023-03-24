package com.orsys.groupe4.projetplage.business;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Utilisateur implements UserDetails {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Long id;
    
    protected String nom;
    
    protected String prenom;
    
    protected String email;
    
    protected int idMdp;
    
    protected int idSel;
    
}