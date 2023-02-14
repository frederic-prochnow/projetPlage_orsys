package com.orsys.groupe4.projetplage.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.orsys.groupe4.projetplage.business.Utilisateur;

public interface UtilisateurDao extends JpaRepository<Utilisateur, Long> {

	@Query(nativeQuery = true, value = "SELECT u.id FROM Utilisateur u WHERE u.email=:email")
	Integer getId(@Param("email") String email);

	@Query(nativeQuery = true, value = "select count(*) = 1 from concessionnaire where id =:id")
	Boolean isConcessionnaire(@Param("id") Long id);

	@Query(nativeQuery = true, value = "select count(*) = 1 from locataire where id =:id")
	Boolean isLocataire(@Param("id") Long id);

	@Query(nativeQuery = true, value = "SELECT m.sel FROM mer m where m.id=:id")
	String getSel(@Param("id") Long id);

	@Query(nativeQuery = true, value = "select count(*) = 1 from login where id =:id and mdp=:mdp")
	Boolean verifLogin(@Param("id") Long id, @Param("mdp") String mdp);
}
