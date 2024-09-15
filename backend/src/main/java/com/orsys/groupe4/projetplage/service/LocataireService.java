package com.orsys.groupe4.projetplage.service;

import com.orsys.groupe4.projetplage.business.Locataire;

import java.util.List;

public interface LocataireService {
    
    boolean creerLocataire(Locataire l, String motDePasse);
    
    public List<Locataire> getLocataireEnCreation();
    
    public List<Locataire> getLocataireValider();
    
    public boolean validerLocataire(Long id);
    
}
