import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Utilisateur } from '../../models/utilisateur';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  model = new Utilisateur('', '', '', '');

  type = "";
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


    if (this.authService.getTokenLoc()) {
      this.type = "Loc";
      this.router.navigate(['/locataire']);
    } else if (this.authService.getTokenCons()) {
      this.type = "Cons";
      this.router.navigate(['/concessionnaire']);
    }
  }

  inscription() {
    this.type = 'Inscription';
  }

  authentification() {
    const email = this.model.email.toLowerCase();
    this.authService.emailExiste(email).subscribe({
      next: (response) => {
        if (!response) {
          this.type = "NO-EMAIL";
        } else {
          let id = 0;
          this.authService.seConnecter(this.model).subscribe({
            next: (response) => {
              if (response) {
                id = response;
                this.authService.estConcessionnaire(email).subscribe({
                  next: (response) => {
                    if (response) {
                      this.type = "Cons";
                      this.authService.loginCons(id);
                      this.router.navigateByUrl('/concessionnaire');
                    } else {
                      this.authService.estLocataire(email).subscribe({
                        next: (response) => {
                          if (response) {
                            this.type = "Loc";
                            this.authService.loginLoc(id);
                            this.router.navigateByUrl('/locataire');
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

  getErrorMessage() {
    let messageErreur;
    if (this.emailValue.hasError('required')) {
      messageErreur = 'Vous devez entrer une valeur!';
    } else if (this.emailValue.hasError('email')) {
      messageErreur = 'Ceci n\'est pas une adresse email valide!';
    } else if (this.motDePasseValue.hasError('required')) {
      messageErreur = '5 caractères minimum!';
    } else {
      messageErreur = '';
    }
    return messageErreur;
  }

}

