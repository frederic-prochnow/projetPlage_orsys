package com.orsys.groupe4.projetplage.service;

import com.orsys.groupe4.projetplage.business.Parasol;
import com.orsys.groupe4.projetplage.dao.ParasolDao;
import com.orsys.groupe4.projetplage.ressource.ParasolRessource;
import com.orsys.groupe4.projetplage.service.impl.ParasolServiceImpl;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDateTime;
import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ParasolServiceTest {
    
    @InjectMocks
    ParasolServiceImpl service;
    
    @Mock
    ParasolDao dao;
    
    @Test
    void testRecupererParasolATraiterParConsEtDate() {
        List<Parasol> liste = ParasolRessource.getListeParasol();
        LocalDateTime date = ParasolRessource.getDate();
        when(dao.findParasolsByConcessionnaireATraiter(1L, date)).thenReturn(liste);
        
        List<Parasol> result = service.recupererParasolATraiterParConsEtDate(1L, date);
        
        assertThat(result != null);
        assertThat(result.size() == liste.size());
        assertThat(result.equals(liste));
        verify(dao, times(1)).findParasolsByConcessionnaireATraiter(1L, date);
    }
    
    @Test
    void testRecupererParasolAValiderParConsEtDate() {
        List<Parasol> liste = ParasolRessource.getListeParasol();
        LocalDateTime date = ParasolRessource.getDate();
        when(dao.findParasolsByConcessionnaireValider(1L, date)).thenReturn(liste);
        
        List<Parasol> result = service.recupererParasolValiderParConsEtDate(1L, date);
        
        assertThat(result != null);
        assertThat(result.size() == liste.size());
        assertThat(result.equals(liste));
        verify(dao, times(1)).findParasolsByConcessionnaireValider(1L, date);
    }
}
