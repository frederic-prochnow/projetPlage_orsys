package com.orsys.groupe4.projetplage.service.impl;

import com.orsys.groupe4.projetplage.business.Locataire;
import com.orsys.groupe4.projetplage.dao.LocataireDao;
import com.orsys.groupe4.projetplage.dao.UtilisateurDao;
import com.orsys.groupe4.projetplage.service.LocataireService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@AllArgsConstructor
public class LocataireServiceImpl implements LocataireService {
    
    private LocataireDao locataireDao;
    private UtilisateurDao utilisateurDao;
    private UtilisateurServiceImpl utilisateurService;
    
    @Override
    public boolean creerLocataire(Locataire l, String mot_de_passe) {
        boolean result = false;
        Long id = Long.valueOf(utilisateurDao.getNextId());
        if (utilisateurDao.creerUtilisateur(id, l.getEmail(), l.getNom(), l.getPrenom()) == 1 && locataireDao.creerLocataire(id, l.getPays().getCode()) == 1) {
            String sel = utilisateurService.genererSel();
            if (utilisateurDao.setSel(Long.valueOf(id), sel) == 1) {
                String mdp = utilisateurService.crypterMotDePasse(mot_de_passe, sel);
                if (utilisateurDao.setMotDePasse(Long.valueOf(id), mdp) == 1) {
                    result = true;
                }
            }
        }
        return result;
    }
    
    public List<Locataire> getLocataireEnCreation() {
        return locataireDao.getLocataireEnCreation();
    }
    
    public List<Locataire> getLocataireValider() {
        return locataireDao.getLocataireValider();
    }
    
    public boolean validerLocataire(Long id) {
        return locataireDao.validerLocataire(id) == 1;
    }
    
}
