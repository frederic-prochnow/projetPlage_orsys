package com.orsys.groupe4.projetplage.dao;

import com.orsys.groupe4.projetplage.business.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(exported = true)
public interface UtilisateurDao extends JpaRepository<Utilisateur, Long> {

    Utilisateur findByNom(String nom);

    Utilisateur findByPrenom(String prenom);

    Utilisateur findByEmail(String email);

    Boolean userExists(Utilisateur user);

    Boolean credentialsOk(String email, String mdp);

    Utilisateur update(Utilisateur user);

}
