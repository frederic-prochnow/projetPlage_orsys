package com.orsys.groupe4.projetplage.service;

import com.orsys.groupe4.projetplage.business.Utilisateur;

public interface UtilisateurService {
	public boolean emailExisteBDD(String email);

	public boolean estConcessionnaire(String email);

	public boolean estLocataire(String email);

	public Long loginCorrect(String email, String mdp);
}
