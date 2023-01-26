package com.orsys.groupe4.projetplage.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.orsys.groupe4.projetplage.business.Locataire;
import com.orsys.groupe4.projetplage.dao.LocataireDao;
import com.orsys.groupe4.projetplage.service.LocataireService;

import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class LocataireServiceImpl implements LocataireService {

	private LocataireDao dao;

	@Override
	public void creerLocataire(Locataire l) {
		dao.save(l);
	}

}
