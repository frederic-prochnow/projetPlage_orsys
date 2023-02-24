import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Utilisateur } from '../models/utilisateur';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  model = new Utilisateur(0, '', '', '', '');

  type = "";
  idLoc = sessionStorage.getItem("idLoc");
  idCons = sessionStorage.getItem("idCons");
  message: string | null = "";
  message_erreur: string | null = "";

  emailValue = new FormControl('', [Validators.required, Validators.email]);
  motDePasseValue = new FormControl('', [Validators.required, Validators.minLength(5)]);
  hide = true;

  ngOnInit(): void {
    this.message = sessionStorage.getItem("message");
    this.message_erreur = sessionStorage.getItem("message_erreur");
    sessionStorage.removeItem("message");
    sessionStorage.removeItem("message_erreur");
  }

  inscription(){
    this.type='Inscription';
  }

  authentification() {
    if (this.idLoc != null) {
      this.type = "Loc";
    } else if (this.idCons != null) {
      this.type = "Cons";
    } else {
      this.authService.emailExiste(this.model.email).subscribe({
        next: (response) => {
          if (!response) {
            this.type = "NO-EMAIL";
          } else {
            let id = 0;
            this.authService.seConnecter(this.model).subscribe({
              next: (response) => {
                if (response) {
                  id = response;
                  this.authService.estConcessionnaire(this.model.email).subscribe({
                    next: (response) => {
                      if (response) {
                        this.type = "Cons";
                        sessionStorage.setItem("idCons", "" + id);
                        this.router.navigate(['/concessionnaire']);
                      } else {
                        this.authService.estLocataire(this.model.email).subscribe({
                          next: (response) => {
                            if (response) {
                              this.type = "Loc";
                              sessionStorage.setItem("idLoc", "" + id);
                              this.router.navigate(['/locataire']);
                            }
                          }
                        });
                      }
                    }
                  });
                } else {
                  this.type = "NO";
                }
              }
            });
          }
        }
      });
    }
  }

  getErrorMessage() {
    let messageErreur;
    if (this.emailValue.hasError('required')){
      messageErreur = 'Vous devez entrer une valeur!';
    } else if (this.emailValue.hasError('email')) {
      messageErreur = 'Ceci n\'est pas une adresse email valide!';
    } else if (this.motDePasseValue.hasError('required')) {
      messageErreur = '5 caractères minimum!';
    }else {
      messageErreur = '';
    }
    return messageErreur;
  }

}

