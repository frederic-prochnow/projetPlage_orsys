package com.orsys.groupe4.projetplage.service.impl;

import com.orsys.groupe4.projetplage.dao.UtilisateurDao;
import com.orsys.groupe4.projetplage.service.UtilisateurService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

@Service
@Transactional
public class UtilisateurServiceImpl implements UtilisateurService {
    
    private UtilisateurDao dao;
    private java.util.Random random;
    
    public UtilisateurServiceImpl(UtilisateurDao dao) {
        super();
        this.dao = dao;
    }
    
    public String crypterMotDePasse(String mdpClair) {
        return crypterMotDePasse(mdpClair, "");
    }
    
    public String crypterMotDePasse(String mdpClair, String sel) {
        String res = "";
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            md.update((mdpClair + sel).getBytes());
            byte[] digest = md.digest();
            res = new BigInteger(1, digest).toString(16).toUpperCase();
        } catch (NoSuchAlgorithmException e) {
            res = "ERROR!!!";
        }
        return res;
    }
    
    /**
     * Generer une chaine aleatoire comprise entre 50 et 100 caractères
     *
     * @return la châine de caractère aléatoire
     */
    public String genererSel() {
        int n = 50 + random.nextInt(50);
        String alfaB = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                + "abcdefghijklmnopqrstuvxyz123456789&*/-+";
        
        StringBuilder s = new StringBuilder(n);
        
        for (int i = 0; i < n; i++) {
            int index = random.nextInt(alfaB.length());
            s.append(alfaB.charAt(index));
        }
        return s.toString();
    }
    
    @Override
    public boolean emailExisteBDD(String email) {
        return dao.getId(email) != null;
    }
    
    @Override
    public boolean estConcessionnaire(String email) {
        return dao.isConcessionnaire(Long.valueOf(dao.getId(email)));
    }
    
    @Override
    public boolean estLocataire(String email) {
        return dao.isLocataire(Long.valueOf(dao.getId(email)));
    }
    
    @Override
    public Long loginCorrect(String email, String mdp) {
        Long res = Long.valueOf(dao.getId(email));
        boolean result = dao.verifLogin(res, crypterMotDePasse(mdp, dao.getSel(res)));
        if (!result) {
            res = Long.valueOf(-1);
        }
        return res;
    }
}
