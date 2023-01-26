package com.orsys.groupe4.projetplage.business;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.OneToMany;

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
public class Pays {

	@Id
	private String code;

	private String nom;
	
	@OneToMany(mappedBy = "pays", fetch = FetchType.EAGER)
	private List<Locataire> locataires;

}