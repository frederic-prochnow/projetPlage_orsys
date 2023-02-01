package com.orsys.groupe4.projetplage.service;

import java.util.List;

import com.orsys.groupe4.projetplage.business.Location;
import com.orsys.groupe4.projetplage.business.Parasol;

public interface LocationService {

	List<Location> toutesLocations(Long idCons);
	
	List<Location> toutesLocationsLocataires(Long idLoc);
	
	List<Location> locationATraiter(Long idCons);

	boolean validerLocation(Long idLocation);

	boolean annulerLocation(Long idLocation);

	boolean creerLocation(String date, int idCons, int idLoc, List<Parasol> parasols, String remarques, int montant);


}
