package com.orsys.groupe4.projetplage.service.impl;

import com.orsys.groupe4.projetplage.business.Pays;
import com.orsys.groupe4.projetplage.dao.PaysDao;
import com.orsys.groupe4.projetplage.service.PaysService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class PaysServiceImpl implements PaysService {
    
    private PaysDao dao;
    
    @Override
    public List<Pays> getPays() {
        return dao.findAll();
    }
}
