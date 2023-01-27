package com.orsys.groupe4.projetplage.business;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;

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

	@NotNull
	@ManyToOne
	private Parasol parasols;

	@ManyToOne
	private Locataire locataire;

	@OneToOne
	private Statut statut;

	@OneToOne
	private Concessionnaire concessionnaire;
}