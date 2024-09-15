package com.orsys.groupe4.projetplage.controller.rest;

import com.orsys.groupe4.projetplage.business.Parasol;
import com.orsys.groupe4.projetplage.ressource.ParasolRessource;
import com.orsys.groupe4.projetplage.service.ParasolService;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import java.time.LocalDateTime;
import java.util.List;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(SpringExtension.class)
@WebMvcTest(ParasolRestController.class)
class ParasolRestControllerTest {
    
    @MockBean
    ParasolService service;
    
    @Autowired
    MockMvc mockMvc;
    
    @Test
    void testRecupererParasolsATraiter() throws Exception {
        List<Parasol> liste = ParasolRessource.getListeParasol();
        LocalDateTime date = ParasolRessource.getDate();
        Mockito.when(service.recupererParasolATraiterParConsEtDate(1L, date)).thenReturn(liste);
        
        mockMvc.perform(get("/api/parasol/liste/aTraiter/1/2023-03-12"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", Matchers.hasSize(3)));
    }
    
    @Test
    void testRecupererParasolsvalider() throws Exception {
        List<Parasol> liste = ParasolRessource.getListeParasol();
        LocalDateTime date = ParasolRessource.getDate();
        Mockito.when(service.recupererParasolValiderParConsEtDate(1L, date)).thenReturn(liste);
        
        mockMvc.perform(get("/api/parasol/liste/valider/1/2023-03-12"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", Matchers.hasSize(3)));
    }
    
}
