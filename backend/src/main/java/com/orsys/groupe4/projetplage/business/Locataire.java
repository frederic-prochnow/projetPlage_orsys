package com.orsys.groupe4.projetplage.business;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.*;

@Entity
public class Locataire extends Utilisateur {

	private LocalDateTime dateHeureInscription;

	@OneToMany(mappedBy = "locataire", fetch = FetchType.EAGER)
	private List<Location> locations;
	
	@OneToOne
	private LienDeParente lienDeParente;
	
	@ManyToOne
	private Pays pays;
	
	

	public Locataire() {
		super();
	}

	public LocalDateTime getDateHeureInscription() {
		return dateHeureInscription;
	}

	public void setDateHeureInscription(LocalDateTime dateHeureInscription) {
		this.dateHeureInscription = dateHeureInscription;
	}

	public List<Location> getLocations() {
		return locations;
	}

	public void setLocations(List<Location> locations) {
		this.locations = locations;
	}

	public LienDeParente getLienDeParente() {
		return lienDeParente;
	}

	public void setLienDeParente(LienDeParente lienDeParente) {
		this.lienDeParente = lienDeParente;
	}

	public Pays getPays() {
		return pays;
	}

	public void setPays(Pays pays) {
		this.pays = pays;
	}
	
}