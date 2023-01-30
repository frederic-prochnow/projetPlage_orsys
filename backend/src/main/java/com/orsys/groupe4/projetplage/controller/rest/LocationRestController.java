package com.orsys.groupe4.projetplage.controller.rest;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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
	
	@GetMapping("locations")
	public List<Location> getLocation() {
		return service.toutesLocations();
	}
	
	@GetMapping("locations/atraiter")
	public List<Location> getLocationATraiter() {
		return service.locationATraiter();
	}

}
