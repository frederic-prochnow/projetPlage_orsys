package com.orsys.groupe4.projetplage.service.impl;

import java.util.List;

import com.orsys.groupe4.projetplage.business.Parasol;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.orsys.groupe4.projetplage.business.Location;
import com.orsys.groupe4.projetplage.dao.LocationDao;
import com.orsys.groupe4.projetplage.service.LocationService;

@Service
@Transactional
public class LocationServiceImpl implements LocationService {

	private LocationDao dao;

	public LocationServiceImpl(LocationDao dao) {
		super();
		this.dao = dao;
	}

	public List<Location> toutesLocations(Long idCons) {
		return dao.reservationByIdCons(idCons);
	}

	public List<Location> toutesLocationsLocataires(Long idLoc) {
		return dao.reservationByIdLoc(idLoc);
	}

	@Override
	public List<Location> locationATraiter(Long idCons) {
		return dao.reservationATraiterByIdCons(idCons);
	}

	@Override
	public boolean validerLocation(Long idLocation) {
		return dao.valider(idLocation) == 1;
	}

	@Override
	public boolean annulerLocation(Long idLocation) {
		return dao.annuler(idLocation) == 1;
	}

	@Override
	public int creerLocation(String date, int idCons, int idLoc, String remarques, int montant) {
		int id = dao.recupererId() + 1;
		boolean ok = dao.ajouterReservation(id, date, idCons, idLoc, remarques, montant) == 1;
		if (!ok) {
			id = -1;
		}
		return id;
	}

	@Override
	public boolean creerParasolsLocation(int idLocation, int idParasol) {
		return dao.ajouterParasolsLocation(idParasol,idLocation) == 1;
	}

}
