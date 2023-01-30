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
@AllArgsConstructor
public class LocationServiceImpl implements LocationService{
	
	private LocationDao dao;
	
	public List<Location> toutesLocations() {
		return dao.findAll();
	}

	@Override
	public List<Location> locationATraiter() {
		return dao.reservationATraiter();
	}

}
