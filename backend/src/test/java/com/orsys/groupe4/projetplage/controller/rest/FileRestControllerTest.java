package com.orsys.groupe4.projetplage.controller.rest;

import com.orsys.groupe4.projetplage.business.File;
import com.orsys.groupe4.projetplage.ressource.FileRessource;
import com.orsys.groupe4.projetplage.service.FileService;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(SpringExtension.class)
@WebMvcTest(FileRestController.class)
public class FileRestControllerTest {
    
    @MockBean
    FileService service;
    
    @Autowired
    MockMvc mockMvc;
    
    @Test
    public void testGetFiles() throws Exception {
        List<File> liste = FileRessource.getListeFileAleatoire(3);
        Mockito.when(service.recupererFiles()).thenReturn(liste);
        
        mockMvc.perform(get("/api/files"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", Matchers.hasSize(3)));
    }
}
