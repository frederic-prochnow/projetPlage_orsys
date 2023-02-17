package com.orsys.groupe4.projetplage.controller.rest;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.orsys.groupe4.projetplage.business.Concessionnaire;
import com.orsys.groupe4.projetplage.business.Locataire;
import com.orsys.groupe4.projetplage.service.ConcessionnaireService;
import com.orsys.groupe4.projetplage.service.LocataireService;
import com.orsys.groupe4.projetplage.service.UtilisateurService;

import java.util.logging.Logger;

@RestController
@RequestMapping("/api/")
@CrossOrigin(origins = "http://localhost:4200")
public class UtilisateurRestController{

	private UtilisateurService service;
	private LocataireService serviceLoc;
	private ConcessionnaireService serviceCons;

	private static final Logger LOG = Logger.getLogger( UtilisateurRestController.class.getName());

	public UtilisateurRestController(UtilisateurService service, LocataireService serviceLoc,
			ConcessionnaireService serviceCons) {
		super();
		this.service = service;
		this.serviceLoc = serviceLoc;
		this.serviceCons = serviceCons;
	}

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
	public Long connectionOK(@PathVariable String mail, @PathVariable String mdp) {
		return service.loginCorrect(mail, mdp);
	}

	@PostMapping("utilisateur/creation/locataire")
	public boolean creerLocataire(@RequestParam Locataire l) {
		serviceLoc.creerLocataire(l);
		return true;
	}

	@PostMapping("utilisateur/creation/concessionnaire")
	public boolean creerConcessionnaire(@RequestParam Concessionnaire c) {
		serviceCons.creerConcessionnaire(c);
		return true;
	}

}
