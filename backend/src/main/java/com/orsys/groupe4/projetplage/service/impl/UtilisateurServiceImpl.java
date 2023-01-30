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
	public boolean verifierIdMdp(Utilisateur utilisateur) {
		return dao.verifEmailMDP(utilisateur.getEmail(), utilisateur.getMotDePasse()) == 1;
	}

	@Override
	public boolean verifierIdMdpLocataire(Utilisateur utilisateur) {
		return dao.verifEmailMDPLocataire(utilisateur.getEmail(), utilisateur.getMotDePasse()) == 1;
	}

	@Override
	public boolean verifierIdMdpConcessionnaire(Utilisateur utilisateur) {
		return dao.verifEmailMDPConcessionnaire(utilisateur.getEmail(), utilisateur.getMotDePasse()) == 1;
	}

	@Override
	public boolean verifierIdMdp(String email, String mdp) {
		return dao.verifEmailMDP(email, mdp) == 1;
	}

	@Override
	public boolean verifierIdMdpLocataire(String email, String mdp) {
		return dao.verifEmailMDPLocataire(email, mdp) == 1;
	}

	@Override
	public boolean verifierIdMdpConcessionnaire(String email, String mdp) {
		return dao.verifEmailMDPConcessionnaire(email, mdp) == 1;
	}
}
