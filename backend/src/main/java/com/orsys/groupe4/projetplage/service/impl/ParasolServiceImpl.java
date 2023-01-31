package com.orsys.groupe4.projetplage.service.impl;

import com.orsys.groupe4.projetplage.business.Parasol;
import com.orsys.groupe4.projetplage.dao.ParasolDao;
import com.orsys.groupe4.projetplage.service.ParasolService;
import lombok.AllArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class ParasolServiceImpl implements ParasolService {

    private ParasolDao dao;

    @Override
    public void creerParasol(Parasol p) {
        dao.save(p);
    }

    @Override
    public List<Parasol> recupererParasolATraiterParConsEtDate(Long id, LocalDateTime date) {
        return dao.findParasolsByConcessionnaireATraiter(id, date);
    }

    @Override
    public List<Parasol> recupererParasolValiderParConsEtDate(Long id, LocalDateTime date) {
        return dao.findParasolsByConcessionnaireValider(id, date);
    }

}
