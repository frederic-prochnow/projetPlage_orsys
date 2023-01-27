package com.orsys.groupe4.projetplage.dao;

import com.orsys.groupe4.projetplage.business.Locataire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(exported = true)
public interface LocataireDao extends JpaRepository<Locataire, Long> {


}
