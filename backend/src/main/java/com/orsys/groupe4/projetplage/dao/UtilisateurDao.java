package com.orsys.groupe4.projetplage.dao;

import com.orsys.groupe4.projetplage.business.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UtilisateurDao extends JpaRepository<Utilisateur, Long> {
    
    @Query(nativeQuery = true, value = "SELECT u.id FROM Utilisateur u WHERE u.email=:email")
    Integer getId(@Param("email") String email);
    
    @Query(nativeQuery = true, value = "SELECT MAX(ID)+1 FROM UTILISATEUR")
    Integer getNextId();
    
    @Query(nativeQuery = true, value = "select count(*) = 1 from concessionnaire where id =:id")
    Boolean isConcessionnaire(@Param("id") Long id);
    
    @Query(nativeQuery = true, value = "select count(*) = 1 from locataire where id =:id")
    Boolean isLocataire(@Param("id") Long id);
    
    @Query(nativeQuery = true, value = "SELECT m.sel FROM mer m where m.id=(select u.id_Sel from utilisateur u where u.id=:id)")
    String getSel(@Param("id") Long id);
    
    @Modifying
    @Query(nativeQuery = true, value = "insert into mer (id,sel) values (:id, :sel);")
    int setSel(@Param("id") Long id, @Param("sel") String sel);
    
    @Modifying
    @Query(nativeQuery = true, value = "insert into login (id,mdp) values (:id, :mdp);")
    int setMotDePasse(@Param("id") Long id, @Param("mdp") String mdp);
    
    @Query(nativeQuery = true, value = "select count(*) = 1 from login l where l.id =(select u.id_Mdp from utilisateur u where u.id=:id) and l.mdp=:mdp")
    Boolean verifLogin(@Param("id") Long id, @Param("mdp") String mdp);
    
    @Modifying
    @Query(nativeQuery = true, value = "insert into utilisateur (id,email,nom,prenom,id_sel,id_mdp) values (:id, :email, :nom, :prenom, :id, :id)")
    int creerUtilisateur(@Param("id") Long id, @Param("email") String email, @Param("nom") String nom, @Param("prenom") String prenom);
}
