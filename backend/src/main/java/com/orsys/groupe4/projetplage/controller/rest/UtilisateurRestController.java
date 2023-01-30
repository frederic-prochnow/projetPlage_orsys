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

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/")
@CrossOrigin(origins = "http://localhost:4200")
public class UtilisateurRestController {

	private UtilisateurService service;
	private LocataireService serviceLoc;
	private ConcessionnaireService serviceCons;

	public UtilisateurRestController(UtilisateurService service, LocataireService serviceLoc,
			ConcessionnaireService serviceCons) {
		super();
		this.service = service;
		this.serviceLoc = serviceLoc;
		this.serviceCons = serviceCons;
	}

	@GetMapping("utilisateur/connection/{mail}/{mdp}")
	public boolean connectionOK(@PathVariable String mail, @PathVariable String mdp) {
		System.out.println(mail + "-" + mdp);
		return service.verifierIdMdp(mail, mdp);
	}

	@GetMapping("utilisateur/connection/locataire/{mail}/{mdp}")
	public boolean connectionLocataireOK(@PathVariable String mail, @PathVariable String mdp) {
		System.out.println(mail + "-" + mdp);
		return service.verifierIdMdpLocataire(mail, mdp);
	}

	@GetMapping("utilisateur/connection/concessionnaire/{mail}/{mdp}")
	public boolean connectionConcessionnaireOK(@PathVariable String mail, @PathVariable String mdp) {
		System.out.println(mail + "-" + mdp);
		return service.verifierIdMdpConcessionnaire(mail, mdp);
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
