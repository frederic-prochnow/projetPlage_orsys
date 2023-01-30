package com.orsys.groupe4.projetplage.dao;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.orsys.groupe4.projetplage.business.File;
import com.orsys.groupe4.projetplage.business.Parasol;

@RepositoryRestResource(exported = true)
public interface ParasolDao extends JpaRepository<Parasol, Long>{
    Parasol findByNumEmplacement(byte numEmplacement);
    Parasol findByNumEmplacementAndFile(byte numEmplacement, File file);
    
    @Query(nativeQuery = true, value=
    		"select * "
    		+ "from Parasol p "
    		+ "where p.id in "
    		+ "(select pl.parasols_id "
    		+ "from Location l "
    		+ "join Parasol_locations pl on l.id = pl.locations_id "
    		+ "where l.concessionnaire_id = :idCons "
    		+ "and :dateLoc >= l.date_heure_debut "
    		+ "and :dateLoc <= l.date_heure_fin)")
    List<Parasol> findParasolsByConcessionnaire(@Param("idCons") Long idCons,@Param("dateLoc") LocalDateTime date);
}