package com.orsys.groupe4.projetplage.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.orsys.groupe4.projetplage.business.Concessionnaire;
import com.orsys.groupe4.projetplage.dao.ConcessionnaireDao;
import com.orsys.groupe4.projetplage.service.ConcessionnaireService;

import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class ConcessionnaireServiceImpl implements ConcessionnaireService {

	private ConcessionnaireDao dao;

	@Override
	public void creerConcessionnaire(Concessionnaire c) {
		dao.save(c);
	}

}
