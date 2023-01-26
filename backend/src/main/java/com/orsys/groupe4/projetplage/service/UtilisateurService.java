package com.orsys.groupe4.projetplage.service;

import com.orsys.groupe4.projetplage.business.Utilisateur;

public interface UtilisateurService {

	public boolean verifierIdMdp(Utilisateur utilisateur);
	public boolean verifierIdMdp(String email, String mdp);
	
	public boolean verifierIdMdpLocataire(Utilisateur utilisateur);
	public boolean verifierIdMdpLocataire(String email, String mdp);
	
	public boolean verifierIdMdpConcessionnaire(Utilisateur utilisateur);
	public boolean verifierIdMdpConcessionnaire(String email, String mdp);

}
