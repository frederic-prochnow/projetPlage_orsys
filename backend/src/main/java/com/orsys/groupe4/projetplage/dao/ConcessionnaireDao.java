package com.orsys.groupe4.projetplage.dao;

import com.orsys.groupe4.projetplage.business.Concessionnaire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(exported = true)
public interface ConcessionnaireDao extends JpaRepository<Concessionnaire, Long> {

}
