package com.orsys.groupe4.projetplage.business;

import javax.persistence.Entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
public class Concessionnaire extends Utilisateur {

	private String numeroDeTelephone;

}