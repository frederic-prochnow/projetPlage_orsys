package com.orsys.groupe4.projetplage.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.orsys.groupe4.projetplage.business.Location;

@RepositoryRestResource(exported = true)
public interface LocationDao extends JpaRepository<Location, Long> {
	
	@Query("from Location l where l.statut.nom = 'A_traiter'")
	public List<Location> reservationATraiter();

}
