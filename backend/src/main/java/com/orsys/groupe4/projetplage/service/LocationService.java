package com.orsys.groupe4.projetplage.service;

import java.util.List;

import com.orsys.groupe4.projetplage.business.Location;

public interface LocationService {

	List<Location> toutesLocations(Long idCons);
	
	List<Location> toutesLocationsLocataires(Long idLoc);
	
	List<Location> locationATraiter(Long idCons);

	boolean validerLocation(Long idLocation);

	boolean annulerLocation(Long idLocation);

}
