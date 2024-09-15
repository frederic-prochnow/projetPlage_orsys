import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';
import { Pays } from '../../models/pays';
import { LocataireService } from '../../services/locataire.service';
import { Utilisateur } from './../../models/utilisateur';
import { PaysService } from './../../services/pays.service';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit{

  model = new Utilisateur('', '', '', '');

  hide = true;
  hide2 = true;

  listePays : Pays[] = [];

  email = new FormControl('', [Validators.required, Validators.email]);
  motDePasse = new FormControl('', [Validators.required, Validators.minLength(5)]);
  motDePasse2 = new FormControl('', [Validators.required, Validators.minLength(5)]);
  nom = new FormControl('', [Validators.required]);
  prenom = new FormControl('', [Validators.required]);
  confirmation = new FormControl('', [Validators.required]);
  pays = new FormControl('', [Validators.required]);

  erreurMDP = false;
  erreurEmail = false;
  erreurPays = false;

  filteredOptions: Observable<Pays[]> = new Observable<Pays[]>();

  ngOnInit() {
    this.filteredOptions = this.pays.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): Pays[] {
    const filterValue = value.toLowerCase();

    return this.listePays.filter(option => option.nom.toLowerCase().includes(filterValue));
  }

  constructor(private serviceLoc: LocataireService, private servicePays: PaysService, private serviceAuth : AuthService) { 
    this.servicePays.getPays().subscribe({
      next: (response) => {
        this.listePays = response;
      }
    });
  }

  /* Vérifie les règles pour le mot de passe
  */
  conditionErreurMdp() {
    this.erreurMDP = (this.motDePasse2.value != this.motDePasse.value)
      && this.motDePasse.value != ""
      && this.motDePasse2.value != "";
  }

  /* Verifie que le pays saisie est present dans la liste
  */
  conditionPays() {
    this.erreurPays = this.listePays.filter(p => p.nom == this.pays.value) == null;
  }

  /* Verifie la disponibilite du mail
  */
  conditionEmailPossible() {
    let email = this.email.value;
    this.serviceAuth.emailExiste(email == null ? "":email).subscribe({
      next: (response) => {
        this.erreurEmail = response;
        if(response) console.log("back -> email existant en base");
      }
    });
  }

  getErrorMessage2(erreur: string) {
    let messageErreur;
    if (erreur == 'required') {
      messageErreur = 'Vous devez entrer une valeur!';
    } else if (erreur == 'email') {
      messageErreur = 'Ceci n\'est pas une adresse email valide!';
    } else if (erreur == 'mdp') {
      messageErreur = '5 caractères minimum!';
    } else if (erreur == 'mdpPasEgal') {
      messageErreur = 'Les mots de passes ne sont pas egaux';
    } else if (erreur == 'emailNonDispo') {
      messageErreur = 'Email indisponible !';
    }else if(erreur = 'pays') {
      messageErreur = 'Pays introuvable!';
    } else {
      messageErreur = 'Erreur !';
    }
    return messageErreur;
  }

  validationPossible() {
    return this.nom.value != "" && this.nom.valid &&
      this.prenom.value != "" && this.prenom.valid &&
      this.email.value != "" && this.email.valid &&
      this.motDePasse.value != "" && this.motDePasse.valid &&
      this.motDePasse2.value != "" && this.motDePasse2.valid &&
      this.motDePasse2.value == this.motDePasse.value &&
      this.confirmation.valid && this.confirmation.value
      && !this.erreurEmail && !this.erreurMDP;
  }

  onSubmit() {
    const paysNom = this.pays.value;
    this.model.pays = this.listePays.find(element => element.nom = (paysNom == null ? "": paysNom));
    let res : Boolean = false;
    this.serviceLoc.creerUtilisateur(this.model).subscribe({
      next: (response) => {
        res = response;
        console.log("back ->" + res);
      }
    });
  }
}
