package com.orsys.groupe4.projetplage.controller.rest;

import com.orsys.groupe4.projetplage.business.Locataire;
import com.orsys.groupe4.projetplage.business.Parasol;
import com.orsys.groupe4.projetplage.service.ParasolService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

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
}
