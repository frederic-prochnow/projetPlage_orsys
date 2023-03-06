package com.orsys.groupe4.projetplage.controller.rest;

import com.orsys.groupe4.projetplage.business.Locataire;
import com.orsys.groupe4.projetplage.dto.UtilisateurDto;
import com.orsys.groupe4.projetplage.mapper.UtilisateurMapper;
import com.orsys.groupe4.projetplage.service.LocataireService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/")
@CrossOrigin(origins = "http://localhost:4200")
public class LocataireRestController {
    
    private UtilisateurMapper mapper;
    private LocataireService serviceLoc;
    
    @PostMapping("locataire/creation")
    @ResponseBody
    public boolean creerLocataire(@RequestBody UtilisateurDto dto) {
        Locataire l = mapper.mapToLocataire(dto);
        return serviceLoc.creerLocataire(l, dto.getMotDePasse());
    }
    
    @GetMapping("locataire/creation/enCours")
    public List<Locataire> getLocataireEnCreation() {
        return serviceLoc.getLocataireEnCreation();
    }
    
    @GetMapping("locataire/creation/valide")
    public List<Locataire> getLocataireValider() {
        return serviceLoc.getLocataireValider();
    }
    
    @GetMapping("locataire/valider/{id}")
    public boolean validerLocataire(@PathVariable Long id) {
        return serviceLoc.validerLocataire(id);
    }
    
}
