package com.orsys.groupe4.projetplage.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.orsys.groupe4.projetplage.business.Location;
import com.orsys.groupe4.projetplage.dao.LocationDao;
import com.orsys.groupe4.projetplage.service.LocationService;

import lombok.AllArgsConstructor;

@Service
@Transactional
public class LocationServiceImpl implements LocationService{
	
	private LocationDao dao;
	
	public LocationServiceImpl(LocationDao dao) {
		super();
		this.dao = dao;
	}

	public List<Location> toutesLocations(Long idCons) {
		return dao.reservationByIdCons(idCons);
	}

	@Override
	public List<Location> locationATraiter(Long idCons) {
		return dao.reservationATraiterByIdCons(idCons);
	}

}
