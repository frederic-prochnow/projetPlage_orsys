package com.orsys.groupe4.projetplage.business;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;

@Entity
public class Locataire extends Utilisateur {
    
    private LocalDateTime dateHeureInscription;
    
    @JsonIgnore
    @OneToMany(mappedBy = "locataire", fetch = FetchType.EAGER)
    private List<Location> locations;
    
    @OneToOne
    private LienDeParente lienDeParente;
    
    @ManyToOne
    private Pays pays;
    
    
    public Locataire() {
        super();
    }
    
    public LocalDateTime getDateHeureInscription() {
        return dateHeureInscription;
    }
    
    public void setDateHeureInscription(LocalDateTime dateHeureInscription) {
        this.dateHeureInscription = dateHeureInscription;
    }
    
    public List<Location> getLocations() {
        return locations;
    }
    
    public void setLocations(List<Location> locations) {
        this.locations = locations;
    }
    
    public LienDeParente getLienDeParente() {
        return lienDeParente;
    }
    
    public void setLienDeParente(LienDeParente lienDeParente) {
        this.lienDeParente = lienDeParente;
    }
    
    public Pays getPays() {
        return pays;
    }
    
    public void setPays(Pays pays) {
        this.pays = pays;
    }
    
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }
    
    @Override
    public String getPassword() {
        return super.email;
    }
    
    @Override
    public String getUsername() {
        return "" + super.id;
    }
    
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }
    
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }
    
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }
    
    @Override
    public boolean isEnabled() {
        return true;
    }
    
}