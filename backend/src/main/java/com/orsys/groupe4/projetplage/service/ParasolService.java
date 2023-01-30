package com.orsys.groupe4.projetplage.service;

import java.time.LocalDateTime;
import java.util.List;

import com.orsys.groupe4.projetplage.business.Parasol;

public interface ParasolService {

    void creerParasol(Parasol p);

    List<Parasol> recupererParasolParConsEtDate(Long id, LocalDateTime date);
}
