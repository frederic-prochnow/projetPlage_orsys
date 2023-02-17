package com.orsys.groupe4.projetplage.controller.rest;

import com.orsys.groupe4.projetplage.service.ConcessionnaireService;
import com.orsys.groupe4.projetplage.service.LocataireService;
import com.orsys.groupe4.projetplage.service.UtilisateurService;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(SpringExtension.class)
@WebMvcTest(UtilisateurRestController.class)
class UtilisateurRestControllerTest {
    
    @MockBean
    UtilisateurService service;
    
    @MockBean
    LocataireService locService;
    
    @MockBean
    ConcessionnaireService consService;
    
    @Autowired
    MockMvc mockMvc;
    
    //jeu de donnée pour les tests
    private final String mail = "toto@titi.fr";
    private final String mdp = "12345";
    
    @Test
    void testExisteEnBase() throws Exception {
        boolean res = true;
        
        Mockito.when(service.emailExisteBDD(mail)).thenReturn(res);
        
        mockMvc.perform(get("/api/utilisateur/" + mail))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", Matchers.is(true)));
    }
    
    @Test
    void testEstConcessionnaire() throws Exception {
        boolean res = true;
        
        Mockito.when(service.estConcessionnaire(mail)).thenReturn(res);
        
        mockMvc.perform(get("/api/utilisateur/connection/concessionnaire/" + mail))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", Matchers.is(true)));
    }
    
    @Test
    void testEstLocataire() throws Exception {
        boolean res = true;
        
        Mockito.when(service.estLocataire(mail)).thenReturn(res);
        
        mockMvc.perform(get("/api/utilisateur/connection/locataire/" + mail))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", Matchers.is(true)));
    }

    /*@Test
    void testLoginCorrect() throws Exception {
        Mockito.when(service.loginCorrect(mail,mdp)).thenReturn(12L);

        mockMvc.perform(get("/api/utilisateur/connection/"+mail+"/"+mdp))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", Matchers.is(12L)));
    }*/
}
