package com.orsys.groupe4.projetplage.controller.rest;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.data.repository.query.Param;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.orsys.groupe4.projetplage.business.Parasol;
import com.orsys.groupe4.projetplage.service.ParasolService;

import lombok.AllArgsConstructor;

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
    public List<Parasol> recupererParasolsATraiter(@PathVariable Long idCons, @PathVariable @DateTimeFormat(pattern="yyyy-MM-dd") LocalDate dateLoc) {
        return servicePara.recupererParasolATraiterParConsEtDate(idCons, LocalDateTime.of(dateLoc.getYear(),dateLoc.getMonth(),dateLoc.getDayOfMonth(),0,0));
    }

    @GetMapping("parasol/liste/valider/{idCons}/{dateLoc}")
    public List<Parasol> recupererParasolsValider(@PathVariable Long idCons, @PathVariable @DateTimeFormat(pattern="yyyy-MM-dd") LocalDate dateLoc) {
        return servicePara.recupererParasolValiderParConsEtDate(idCons, LocalDateTime.of(dateLoc.getYear(),dateLoc.getMonth(),dateLoc.getDayOfMonth(),0,0));
    }
}
