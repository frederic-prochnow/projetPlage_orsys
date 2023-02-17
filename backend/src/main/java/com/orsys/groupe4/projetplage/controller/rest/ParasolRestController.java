package com.orsys.groupe4.projetplage.controller.rest;

import com.orsys.groupe4.projetplage.business.Parasol;
import com.orsys.groupe4.projetplage.service.ParasolService;
import lombok.AllArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/")
@CrossOrigin(origins = "http://localhost:4200")
public class ParasolRestController {
    
    private ParasolService servicePara;
    
    @PostMapping("parasol/creation")
    public boolean creerParasol(@RequestParam Parasol p) {
        servicePara.creerParasol(p);
        return true;
    }
    
    @GetMapping("parasol/liste/aTraiter/{idCons}/{dateLoc}")
    public List<Parasol> recupererParasolsATraiter(@PathVariable Long idCons, @PathVariable @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate dateLoc) {
        return servicePara.recupererParasolATraiterParConsEtDate(idCons, LocalDateTime.of(dateLoc.getYear(), dateLoc.getMonth(), dateLoc.getDayOfMonth(), 0, 0));
    }
    
    @GetMapping("parasol/liste/valider/{idCons}/{dateLoc}")
    public List<Parasol> recupererParasolsValider(@PathVariable Long idCons, @PathVariable @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate dateLoc) {
        return servicePara.recupererParasolValiderParConsEtDate(idCons, LocalDateTime.of(dateLoc.getYear(), dateLoc.getMonth(), dateLoc.getDayOfMonth(), 0, 0));
    }
}
