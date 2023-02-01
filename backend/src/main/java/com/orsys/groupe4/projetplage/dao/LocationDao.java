package com.orsys.groupe4.projetplage.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.orsys.groupe4.projetplage.business.Location;

@RepositoryRestResource(exported = true)
public interface LocationDao extends JpaRepository<Location, Long> {
	
	@Query(nativeQuery = true, value="Select * from Location l where l.concessionnaire_id=:idCons")
	public List<Location> reservationByIdCons(@Param("idCons") Long idCons);
	
	@Query(nativeQuery = true, value="Select * from Location l where l.locataire_id =:idLoc")
	public List<Location> reservationByIdLoc(@Param("idLoc")Long idLoc);
	
	@Query(nativeQuery = true, value="Select * from Location l where l.statut_id = (select id from statut where nom ='ATraiter') and l.concessionnaire_id=:idCons")
	public List<Location> reservationATraiterByIdCons(@Param("idCons") Long idCons);

	@Modifying
	@Query(nativeQuery = true, value="update Location set statut_id = (select id from statut where nom ='Valider') where id = :idLoc ")
	public int valider(@Param("idLoc") Long idLocation);

	@Modifying
	@Query(nativeQuery = true, value="update Location set statut_id = (select id from statut where nom ='Annuler') where id = :idLoc ")
	public int annuler(@Param("idLoc") Long idLocation);

  	@Modifying
	@Query(nativeQuery = true, value= "insert into location (id,date_heure_debut,date_heure_fin, montantaregler_en_euros, remarques, concessionnaire_id, locataire_id, statut_id)"
				   					+ "values (:id,to_timestamp(:date,'YYYY-MM-DD'),to_timestamp(:date,'YYYY-MM-DD'),:montant,:remarques,:idCons,:idLoc,(select id from statut where nom ='ATraiter'));")
	public int ajouterReservation(@Param("id") int id, @Param("date") String date, @Param("idCons") int idCons, @Param("idLoc") int idLoc, @Param("remarques") String remarques, @Param("montant") int montant);

	@Query(nativeQuery = true, value= "select max(id) from location")
	public int recupererId();

	@Modifying
	@Query(nativeQuery = true, value= "insert into parasol_locations (parasols_id,locations_id)"
									+ "values (:idPara, :idLoca);")
	public int ajouterParasolsLocation(@Param("idPara") Long idPara, @Param("idLoca") int idLoca);

}
