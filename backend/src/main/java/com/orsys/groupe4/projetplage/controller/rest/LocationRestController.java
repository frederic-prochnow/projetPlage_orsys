package com.orsys.groupe4.projetplage.controller.rest;

import com.orsys.groupe4.projetplage.business.Location;
import com.orsys.groupe4.projetplage.service.LocationService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    
    @GetMapping("locations/locataire/{idLoc}")
    public List<Location> getLocationLocataire(@PathVariable Long idLoc) {
        return service.toutesLocationsLocataires(idLoc);
    }
    
    @GetMapping("locations/atraiter/{idCons}")
    public List<Location> getLocationATraiter(@PathVariable Long idCons) {
        return service.locationATraiter(idCons);
    }
    
    @GetMapping("locations/valider/{idLocation}")
    public boolean validerLocation(@PathVariable Long idLocation) {
        return service.validerLocation(idLocation);
    }
    
    @GetMapping("locations/annuler/{idLocation}")
    public boolean annulerLocation(@PathVariable Long idLocation) {
        return service.annulerLocation(idLocation);
    }
    
    @PostMapping("location/creation/")
    public int creerLocation(@RequestParam String date, @RequestParam int idCons, @RequestParam int idLoc, @RequestParam String remarques, @RequestParam int montant) {
        return service.creerLocation(date, idCons, idLoc, remarques, montant);
    }
    
    @PostMapping("location/creation/parasols")
    public boolean creerParasolsLocation(@RequestParam int idLocation, @RequestParam int idParasol) {
        return service.creerParasolsLocation(idLocation, idParasol);
    }
}
