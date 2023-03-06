package com.orsys.groupe4.projetplage.dao;

import com.orsys.groupe4.projetplage.business.Locataire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(exported = true)
public interface LocataireDao extends JpaRepository<Locataire, Long> {
    
    @Modifying
    @Query(nativeQuery = true, value = "insert into locataire (id, date_heure_inscription, pays_code, statut)" +
            "values (:id, current_date, :codePays, 'Creation')")
    int creerLocataire(@Param("id") Long id, @Param("codePays") String codePays);
    
    @Query(nativeQuery = true, value = "select * from locataire l join utilisateur u on l.id = u.id where l.statut = 'Creation'")
    List<Locataire> getLocataireEnCreation();
    
    @Query(nativeQuery = true, value = "select * from locataire l join utilisateur u on l.id = u.id where l.statut = 'Valide'")
    List<Locataire> getLocataireValider();
    
    @Modifying
    @Query(nativeQuery = true, value = "update Locataire set statut = 'Valide' where id = :id ")
    int validerLocataire(@Param("id") Long id);
    
}
