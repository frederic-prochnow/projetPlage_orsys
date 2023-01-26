package com.orsys.groupe4.projetplage.dao;

import com.orsys.groupe4.projetplage.business.Pays;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(exported = true)
public interface PaysDao extends JpaRepository<Pays, String> {

}
