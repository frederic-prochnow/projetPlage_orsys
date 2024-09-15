package com.orsys.groupe4.projetplage.ressource;

import com.orsys.groupe4.projetplage.business.Parasol;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

public class ParasolRessource {
    
    public static List<Parasol> getListeParasol() {
        Parasol p1 = new Parasol();
        p1.setId(1L);
        p1.setNumEmplacement((byte) 10);
        
        Parasol p2 = new Parasol();
        p2.setId(2L);
        p2.setNumEmplacement((byte) 20);
        
        Parasol p3 = new Parasol();
        p3.setId(3L);
        p3.setNumEmplacement((byte) 30);
        
        List<Parasol> liste = new ArrayList<>();
        liste.add(p1);
        liste.add(p2);
        liste.add(p3);
        return liste;
    }
    
    public static LocalDateTime getDate() {
        LocalDate dateLoc = LocalDate.parse("2023-03-12", DateTimeFormatter.ofPattern("yyyy-MM-dd"));
        return LocalDateTime.of(dateLoc.getYear(), dateLoc.getMonth(), dateLoc.getDayOfMonth(), 0, 0);
    }
}
