package com.orsys.groupe4.projetplage.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.orsys.groupe4.projetplage.business.Utilisateur;

public interface UtilisateurDao extends JpaRepository<Utilisateur, Long> {

	Utilisateur findByNom(String nom);

	Utilisateur findByPrenom(String prenom);

	Utilisateur findByEmail(String email);
	
	@Query(value = "SELECT u.id "
			+ "FROM Utilisateur u "
			+ "WHERE u.email=:email AND u.motDePasse=:mdp")
	Integer verifEmailMDP(@Param("email") String email,@Param("mdp") String mdp);
	
	@Query(value = "SELECT u.id "
			+ "FROM Utilisateur u "
			+ "WHERE u.email=:email AND u.motDePasse=:mdp "
			+ "AND u.id IN (select l.id from Locataire l)")
	Integer verifEmailMDPLocataire(@Param("email") String email,@Param("mdp") String mdp);
	
	@Query(value = "SELECT u.id "
			+ "FROM Utilisateur u "
			+ "WHERE u.email=:email AND u.motDePasse=:mdp "
			+ "AND u.id IN (select c.id from Concessionnaire c)")
	Integer verifEmailMDPConcessionnaire(@Param("email") String email,@Param("mdp") String mdp);

}
