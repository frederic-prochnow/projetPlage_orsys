package com.orsys.groupe4.projetplage.business;

import java.util.List;

import javax.persistence.*;
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
public class Parasol {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private byte numEmplacement;

	@NotNull
	@ManyToOne
	private File file;

	@OneToMany
	private List<Location> locations;

}