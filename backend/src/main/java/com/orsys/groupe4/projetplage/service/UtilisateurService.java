package com.orsys.groupe4.projetplage.service;

import com.orsys.groupe4.projetplage.business.Utilisateur;

public interface UtilisateurService {

	public int verifierIdMdp(Utilisateur utilisateur);
	public int verifierIdMdp(String email, String mdp);
	
	public int verifierIdMdpLocataire(Utilisateur utilisateur);
	public int verifierIdMdpLocataire(String email, String mdp);
	
	public int verifierIdMdpConcessionnaire(Utilisateur utilisateur);
	public int verifierIdMdpConcessionnaire(String email, String mdp);
}
