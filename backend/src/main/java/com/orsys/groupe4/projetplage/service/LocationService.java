package com.orsys.groupe4.projetplage.service;

import java.util.List;

import com.orsys.groupe4.projetplage.business.Location;

public interface LocationService {

	List<Location> toutesLocations();
	
	List<Location> locationATraiter();
}
