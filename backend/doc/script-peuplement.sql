select * from Parasol p where p.id in 
(select pl.parasols_id from Location l join Parasol_locations pl on l.id = pl.locations_id 
 where l.concessionnaire_id = 1 and to_date('DD/MM/YYYY','02/06/2023') >= l.date_heure_debut 
 and to_date('DD/MM/YYYY','02/06/2023') <= l.date_heure_fin)
 
 Select * from Location l where l.statut_id = (select id from statut where nom ='ATraiter')
 
 --debut 01-06
 --fin 15-09

insert into File (numero, prix_journalier) values (1,40);
insert into File (numero, prix_journalier) values (2,35);
insert into File (numero, prix_journalier) values (3,30);
insert into File (numero, prix_journalier) values (4,25);
insert into File (numero, prix_journalier) values (5,20);
insert into File (numero, prix_journalier) values (6,15);
insert into File (numero, prix_journalier) values (7,10);
insert into File (numero, prix_journalier) values (8,5);

select * from file;

insert into Parasol (num_emplacement, file_id)  values (1,1);
insert into Parasol (num_emplacement, file_id)  values (2,1);
insert into Parasol (num_emplacement, file_id)  values (3,1);
insert into Parasol (num_emplacement, file_id)  values (4,1);
insert into Parasol (num_emplacement, file_id)  values (5,1);
insert into Parasol (num_emplacement, file_id)  values (6,1);
insert into Parasol (num_emplacement, file_id)  values (7,1);
insert into Parasol (num_emplacement, file_id)  values (8,1);
insert into Parasol (num_emplacement, file_id)  values (9,1);
insert into Parasol (num_emplacement, file_id)  values (10,1);
insert into Parasol (num_emplacement, file_id)  values (1,2);
insert into Parasol (num_emplacement, file_id)  values (2,2);
insert into Parasol (num_emplacement, file_id)  values (3,2);
insert into Parasol (num_emplacement, file_id)  values (4,2);
insert into Parasol (num_emplacement, file_id)  values (5,2);
insert into Parasol (num_emplacement, file_id)  values (6,2);
insert into Parasol (num_emplacement, file_id)  values (7,2);
insert into Parasol (num_emplacement, file_id)  values (8,2);
insert into Parasol (num_emplacement, file_id)  values (9,2);
insert into Parasol (num_emplacement, file_id)  values (10,2);
insert into Parasol (num_emplacement, file_id)  values (1,3);
insert into Parasol (num_emplacement, file_id)  values (2,3);
insert into Parasol (num_emplacement, file_id)  values (3,3);
insert into Parasol (num_emplacement, file_id)  values (4,3);
insert into Parasol (num_emplacement, file_id)  values (5,3);
insert into Parasol (num_emplacement, file_id)  values (6,3);
insert into Parasol (num_emplacement, file_id)  values (7,3);
insert into Parasol (num_emplacement, file_id)  values (8,3);
insert into Parasol (num_emplacement, file_id)  values (9,3);
insert into Parasol (num_emplacement, file_id)  values (10,3);
insert into Parasol (num_emplacement, file_id)  values (1,4);
insert into Parasol (num_emplacement, file_id)  values (2,4);
insert into Parasol (num_emplacement, file_id)  values (3,4);
insert into Parasol (num_emplacement, file_id)  values (4,4);
insert into Parasol (num_emplacement, file_id)  values (5,4);
insert into Parasol (num_emplacement, file_id)  values (6,4);
insert into Parasol (num_emplacement, file_id)  values (7,4);
insert into Parasol (num_emplacement, file_id)  values (8,4);
insert into Parasol (num_emplacement, file_id)  values (9,4);
insert into Parasol (num_emplacement, file_id)  values (10,4);
insert into Parasol (num_emplacement, file_id)  values (1,5);
insert into Parasol (num_emplacement, file_id)  values (2,5);
insert into Parasol (num_emplacement, file_id)  values (3,5);
insert into Parasol (num_emplacement, file_id)  values (4,5);
insert into Parasol (num_emplacement, file_id)  values (5,5);
insert into Parasol (num_emplacement, file_id)  values (6,5);
insert into Parasol (num_emplacement, file_id)  values (7,5);
insert into Parasol (num_emplacement, file_id)  values (8,5);
insert into Parasol (num_emplacement, file_id)  values (9,5);
insert into Parasol (num_emplacement, file_id)  values (10,5);
insert into Parasol (num_emplacement, file_id)  values (1,6);
insert into Parasol (num_emplacement, file_id)  values (2,6);
insert into Parasol (num_emplacement, file_id)  values (3,6);
insert into Parasol (num_emplacement, file_id)  values (4,6);
insert into Parasol (num_emplacement, file_id)  values (5,6);
insert into Parasol (num_emplacement, file_id)  values (6,6);
insert into Parasol (num_emplacement, file_id)  values (7,6);
insert into Parasol (num_emplacement, file_id)  values (8,6);
insert into Parasol (num_emplacement, file_id)  values (9,6);
insert into Parasol (num_emplacement, file_id)  values (10,6);
insert into Parasol (num_emplacement, file_id)  values (1,7);
insert into Parasol (num_emplacement, file_id)  values (2,7);
insert into Parasol (num_emplacement, file_id)  values (3,7);
insert into Parasol (num_emplacement, file_id)  values (4,7);
insert into Parasol (num_emplacement, file_id)  values (5,7);
insert into Parasol (num_emplacement, file_id)  values (6,7);
insert into Parasol (num_emplacement, file_id)  values (7,7);
insert into Parasol (num_emplacement, file_id)  values (8,7);
insert into Parasol (num_emplacement, file_id)  values (9,7);
insert into Parasol (num_emplacement, file_id)  values (10,7);
insert into Parasol (num_emplacement, file_id)  values (1,8);
insert into Parasol (num_emplacement, file_id)  values (2,8);
insert into Parasol (num_emplacement, file_id)  values (3,8);
insert into Parasol (num_emplacement, file_id)  values (4,8);
insert into Parasol (num_emplacement, file_id)  values (5,8);
insert into Parasol (num_emplacement, file_id)  values (6,8);
insert into Parasol (num_emplacement, file_id)  values (7,8);
insert into Parasol (num_emplacement, file_id)  values (8,8);
insert into Parasol (num_emplacement, file_id)  values (9,8);
insert into Parasol (num_emplacement, file_id)  values (10,8);

select count(*) from parasol;
select * from parasol;


insert into statut (nom) values ('ATraiter');
insert into statut (nom) values ('Valider');
insert into statut (nom) values ('Annuler');

select * from statut;

select * from utilisateur;

update utilisateur set nom='TOTO', prenom='TITI' where id=1;
update utilisateur set nom='CONSTRUCTOR', prenom='Maximo' where id=2;

select * from Concessionnaire;
select * from Concessionnaire natural join Utilisateur;

insert into utilisateur (email, mot_de_passe)
values ('cons@titi.fr','1234');
select id from utilisateur where email='cons@titi.fr';
insert into concessionnaire (id) values (2);

select * from Locataire;
select * from Locataire natural join Utilisateur;

insert into location (date_heure_debut,date_heure_fin, montantaregler_en_euros, remarques, concessionnaire_id, locataire_id, statut_id)
values (to_timestamp('01/06/2023','DD/MM/YYYY'),to_timestamp('03/06/2023','DD/MM/YYYY'),150,'yala ça marche !',1,2,1);

select * from location;

delete from location where id = 2 or id = 3;
delete from parasol_locations where locations_id = 2 or locations_id = 3;


insert into parasol_locations values (1,4);
insert into parasol_locations values (75,4);
insert into parasol_locations values (55,4);
insert into parasol_locations values (27,4);
insert into parasol_locations values (7,4);

select * from parasol_locations pl join parasol p on pl.parasols_id = p.id join file f on p.file_id = f.id;