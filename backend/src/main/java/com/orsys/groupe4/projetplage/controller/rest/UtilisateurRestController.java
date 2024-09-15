package com.orsys.groupe4.projetplage.controller.rest;

import com.orsys.groupe4.projetplage.dto.UtilisateurDto;
import com.orsys.groupe4.projetplage.mapper.UtilisateurMapper;
import com.orsys.groupe4.projetplage.service.ConcessionnaireService;
import com.orsys.groupe4.projetplage.service.UtilisateurService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;

@RestController
@AllArgsConstructor
@RequestMapping("/api/")
@CrossOrigin(origins = "http://localhost:4200")
public class UtilisateurRestController {
    
    private UtilisateurService service;
    private UtilisateurMapper mapper;
    private ConcessionnaireService serviceCons;
    
    @GetMapping("utilisateur/{mail}")
    public boolean existeEnBase(@PathVariable String mail) {
        return service.emailExisteBDD(mail);
    }
    
    @GetMapping("utilisateur/connection/concessionnaire/{mail}")
    public boolean estConcessionnaire(@PathVariable String mail) {
        return service.estConcessionnaire(mail);
    }
    
    @GetMapping("utilisateur/connection/locataire/{mail}")
    public boolean estlocataire(@PathVariable String mail) {
        return service.estLocataire(mail);
    }
    
    @GetMapping("utilisateur/connection/{mail}/{mdp}")
    public Long connectionOK(@PathVariable String mail, @PathVariable String mdp, HttpServletResponse response) {
        return service.loginCorrect(mail, mdp);
    }
    
    @PostMapping("utilisateur/creation/concessionnaire")
    public boolean creerConcessionnaire(@RequestParam UtilisateurDto dto) {
        serviceCons.creerConcessionnaire(mapper.mapToConcessionnaire(dto));
        return true;
    }
    
}
