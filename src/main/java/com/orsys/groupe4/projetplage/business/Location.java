package com.orsys.groupe4.projetplage.business;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@Getter
@Setter
@NoArgsConstructor
@ToString
public class Location {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private LocalDateTime dateHeureDebut;

	private LocalDateTime dateHeureFin;

	private double montantAReglerEnEuros;

	@Column(length = 300)
	private String remarques;

	@OneToMany(mappedBy = "locations", fetch = FetchType.EAGER)
	private List<Parasol> parasols;

	@OneToOne
	private Locataire locataire;

	@OneToOne
	private Statut statut;

	@OneToOne
	private Concessionnaire concessionnaire;
}