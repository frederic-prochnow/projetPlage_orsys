package com.orsys.groupe4.projetplage.controller.rest;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.orsys.groupe4.projetplage.business.Location;
import com.orsys.groupe4.projetplage.service.LocationService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/api/")
@CrossOrigin(origins = "http://localhost:4200")
public class LocationRestController {
	
	private LocationService service;
	
	@GetMapping("locations/{idCons}")
	public List<Location> getLocation(@PathVariable Long idCons) {
		return service.toutesLocations(idCons);
	}
	
	@GetMapping("locations/atraiter/{idCons}")
	public List<Location> getLocationATraiter(@PathVariable Long idCons) {
		return service.locationATraiter(idCons);
	}
}
