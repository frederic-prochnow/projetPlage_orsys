package com.orsys.groupe4.projetplage.dao;

import com.orsys.groupe4.projetplage.business.Parasol;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(exported = true)
public interface ParasolDao extends JpaRepository<Parasol, Long>{

}