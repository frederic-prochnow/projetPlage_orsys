package com.orsys.groupe4.projetplage.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.orsys.groupe4.projetplage.business.Utilisateur;
import com.orsys.groupe4.projetplage.dao.UtilisateurDao;
import com.orsys.groupe4.projetplage.service.UtilisateurService;

import lombok.AllArgsConstructor;

@Service
@Transactional
public class UtilisateurServiceImpl implements UtilisateurService {

	private UtilisateurDao dao;
	
	public UtilisateurServiceImpl(UtilisateurDao dao) {
		super();
		this.dao = dao;
	}

	@Override
	public int verifierIdMdp(Utilisateur utilisateur) {
		Integer id = dao.verifEmailMDP(utilisateur.getEmail(), utilisateur.getMotDePasse());
		return id == null ? -1 : id;
	}

	@Override
	public int verifierIdMdpLocataire(Utilisateur utilisateur) {
		Integer id = dao.verifEmailMDPLocataire(utilisateur.getEmail(), utilisateur.getMotDePasse());
		return id == null ? -1 : id;
	}

	@Override
	public int verifierIdMdpConcessionnaire(Utilisateur utilisateur) {
		Integer id = dao.verifEmailMDPConcessionnaire(utilisateur.getEmail(), utilisateur.getMotDePasse());
		return id == null ? -1 : id;
	}

	@Override
	public int verifierIdMdp(String email, String mdp) {
		Integer id = dao.verifEmailMDP(email, mdp);
		return id == null ? -1 : id;
	}

	@Override
	public int verifierIdMdpLocataire(String email, String mdp) {
		Integer id =  dao.verifEmailMDPLocataire(email, mdp);
		return id == null ? -1 : id;
	}

	@Override
	public int verifierIdMdpConcessionnaire(String email, String mdp) {
		Integer id = dao.verifEmailMDPConcessionnaire(email, mdp);
		return id == null ? -1 : id;
	}
}
