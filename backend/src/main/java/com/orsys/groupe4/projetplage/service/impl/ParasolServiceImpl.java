package com.orsys.groupe4.projetplage.service.impl;

import com.orsys.groupe4.projetplage.business.Parasol;
import com.orsys.groupe4.projetplage.dao.ParasolDao;
import com.orsys.groupe4.projetplage.service.ParasolService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class ParasolServiceImpl implements ParasolService {

    private final ParasolDao dao;

    @Override
    public void creerParasol(Parasol p) {
        dao.save(p);
    }
}
