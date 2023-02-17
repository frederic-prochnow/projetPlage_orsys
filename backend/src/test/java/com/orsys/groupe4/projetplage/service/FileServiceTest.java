package com.orsys.groupe4.projetplage.service;

import com.orsys.groupe4.projetplage.business.File;
import com.orsys.groupe4.projetplage.dao.FileDao;
import com.orsys.groupe4.projetplage.ressource.FileRessource;
import com.orsys.groupe4.projetplage.service.impl.FileServiceImpl;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class FileServiceTest {
    
    @InjectMocks
    FileServiceImpl fileService;
    
    @Mock
    FileDao fileDao;
    
    @Test
    public void testRecupererFiles() {
        List<File> liste = FileRessource.getListeFileAleatoire(3);
        when(fileDao.findAll()).thenReturn(liste);
        
        List<File> result = fileService.recupererFiles();
        
        assertThat(result != null);
        assertThat(result.size() == liste.size());
        assertThat(result.equals(liste));
        verify(fileDao, times(1)).findAll();
    }
}
