package com.orsys.groupe4.projetplage.service;

import com.orsys.groupe4.projetplage.dao.UtilisateurDao;
import com.orsys.groupe4.projetplage.service.impl.UtilisateurServiceImpl;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class UtilisateurServiceTest{

    @InjectMocks
    UtilisateurServiceImpl utilisateurService;

    @Mock
    UtilisateurDao utilisateurDao;

    //jeu de donnée pour les tests
    private final String mail = "toto@titi.fr";
    private final long id = 1;
    private final String mdp = "12345";
    private final String sel = "BbgbfbbnVVBVVbvvgvh";

    @Test
    public void testCryptage() {
        assertThat(mdp == mdp);

        String crypt1 = utilisateurService.crypterMotDePasse(mdp);
        String crypt2 = utilisateurService.crypterMotDePasse(mdp);
        assertThat(crypt1 == crypt2);

        String crypt3 = utilisateurService.crypterMotDePasse(mdp,sel);
        String crypt4 = utilisateurService.crypterMotDePasse(mdp,sel);
        assertThat(crypt1 != crypt3);
        assertThat(crypt2 != crypt3);
        assertThat(crypt1 != crypt4);
        assertThat(crypt2 != crypt4);
        assertThat(crypt3 == crypt4);

        assertThat(crypt1 != mdp);
        assertThat(crypt1 != sel);
        assertThat(crypt2 != mdp);
        assertThat(crypt2 != sel);
        assertThat(crypt3 != mdp);
        assertThat(crypt3 != sel);
        assertThat(crypt4 != mdp);
        assertThat(crypt4 != sel);
    }

    @Test
    public void testGenererSel() {
        String sel1 = utilisateurService.genererSel();
        String sel2 = utilisateurService.genererSel();

        assertThat(sel1 != sel2);
        assertThat(sel1 != "");
        assertThat(sel2 != "");
        assertThat(sel1.length() >= 50 && sel1.length() <= 100);
        assertThat(sel2.length() >= 50 && sel2.length() <= 100);
    }

    @Test
    public void testEmailExisteEnBDD() {
        when(utilisateurDao.getId(mail)).thenReturn(1);

        boolean res = utilisateurService.emailExisteBDD(mail);

        assertThat(res);
        verify(utilisateurDao, times(1)).getId(mail);
    }

    @Test
    public void testEstConcessionnaire() {
        when(utilisateurDao.getId(mail)).thenReturn(1);
        when(utilisateurDao.isConcessionnaire(1L)).thenReturn(true);

        boolean res = utilisateurService.estConcessionnaire(mail);

        assertThat(res);
        verify(utilisateurDao, times(1)).getId(mail);
        verify(utilisateurDao, times(1)).isConcessionnaire(1L);
    }

    @Test
    public void testEstLocataire() {
        when(utilisateurDao.getId(mail)).thenReturn(1);
        when(utilisateurDao.isLocataire(1L)).thenReturn(true);

        boolean res = utilisateurService.estLocataire(mail);

        assertThat(res);
        verify(utilisateurDao, times(1)).getId(mail);
        verify(utilisateurDao, times(1)).isLocataire(1L);
    }

    @Test
    public void testLoginCorrect() {
        when(utilisateurDao.getId(mail)).thenReturn(1);
        when(utilisateurDao.getSel(id)).thenReturn(sel);
        String mdpCryptSal = utilisateurService.crypterMotDePasse(mdp,sel);

        when(utilisateurDao.verifLogin(id,mdpCryptSal)).thenReturn(true);
        assertThat(utilisateurService.loginCorrect(mail,mdp) == id);

        when(utilisateurDao.verifLogin(id,mdpCryptSal)).thenReturn(false);
        assertThat(utilisateurService.loginCorrect(mail,mdp) == -1);

        verify(utilisateurDao, times(2)).getId(mail);
        verify(utilisateurDao, times(2)).getSel(id);
        verify(utilisateurDao, times(2)).verifLogin(id,mdpCryptSal);
    }
}
