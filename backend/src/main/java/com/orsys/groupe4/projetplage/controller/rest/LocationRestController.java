package com.orsys.groupe4.projetplage.controller.rest;

import java.util.List;

import com.orsys.groupe4.projetplage.business.Locataire;
import com.orsys.groupe4.projetplage.business.Parasol;
import org.springframework.web.bind.annotation.*;

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

	@PostMapping("location/creation/")
	public boolean creerLocation(@RequestParam String date, @RequestParam int idCons, @RequestParam int idLoc, @RequestParam List<Parasol> parasols, @RequestParam String remarques, @RequestParam int montant) {
		return service.creerLocation(date, idCons, idLoc, parasols, remarques, montant);
	}
}
