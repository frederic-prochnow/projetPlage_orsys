package com.orsys.groupe4.projetplage.business;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.*;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
public class Locataire extends Utilisateur {

	private LocalDateTime dateHeureInscription;

	@OneToMany(mappedBy = "locataire", fetch = FetchType.EAGER)
	private List<Location> locations;
	
	@OneToOne
	private LienDeParente lienDeParente;
	
	@ManyToOne
	private Pays pays;
}