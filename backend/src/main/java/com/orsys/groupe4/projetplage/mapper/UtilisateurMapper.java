package com.orsys.groupe4.projetplage.mapper;

import com.orsys.groupe4.projetplage.business.Concessionnaire;
import com.orsys.groupe4.projetplage.business.Locataire;
import com.orsys.groupe4.projetplage.business.Utilisateur;
import com.orsys.groupe4.projetplage.dto.UtilisateurDto;
import org.mapstruct.Mapper;

@Mapper(
        componentModel = "spring"
)
public interface UtilisateurMapper {
    
    UtilisateurDto mapToUtilisateurDto(Utilisateur utilisateur);
    
    Concessionnaire mapToConcessionnaire(UtilisateurDto utilisateurDto);
    
    Locataire mapToLocataire(UtilisateurDto utilisateurDto);
}
