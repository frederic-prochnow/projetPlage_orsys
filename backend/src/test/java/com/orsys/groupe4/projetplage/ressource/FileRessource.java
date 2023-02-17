package com.orsys.groupe4.projetplage.ressource;

import com.orsys.groupe4.projetplage.business.File;

import java.util.ArrayList;
import java.util.List;

public class FileRessource {

    public static List<File> getListeFileAleatoire(int taille){
        List<File> liste = new ArrayList<>();

        for(int i=0; i < taille; i++){
            File file = new File();
            file.setId((long) (Math.random() * 100));
            file.setNumero((byte) (Math.random() * 100));
            file.setPrixJournalier((Math.random() * 100));

            liste.add(file);
        }
        return liste;
    }
}
