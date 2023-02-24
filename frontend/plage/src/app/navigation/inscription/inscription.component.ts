import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {

  email = new FormControl('', [Validators.required, Validators.email]);
  motDePasse = new FormControl('', [Validators.required, Validators.minLength(5)]);
  nom = new FormControl('', [Validators.required]);
  prenom = new FormControl('', [Validators.required]);
  hide = true;

  getErrorMessage() {
    let messageErreur;
    if (this.email.hasError('required') ||
      this.nom.hasError('required') ||
      this.prenom.hasError('required')) {
      messageErreur = 'Vous devez entrer une valeur!';
    } else if (this.email.hasError('email')) {
      messageErreur = 'Ceci n\'est pas une adresse email valide!';
    } else if (this.motDePasse.hasError('required')) {
      messageErreur = '5 caractères minimum!';
    }else {
      messageErreur = '';
    }
    return messageErreur;
  }


}
