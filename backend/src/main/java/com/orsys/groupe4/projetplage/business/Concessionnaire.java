package com.orsys.groupe4.projetplage.business;

import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.Entity;
import java.util.Collection;

@Getter
@Setter
@Entity
public class Concessionnaire extends Utilisateur {
    
    private String numeroDeTelephone;
    
    public Concessionnaire() {
        super();
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