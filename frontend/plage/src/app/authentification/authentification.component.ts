import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Utilisateur } from '../models/utilisateur';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  constructor(private authService: AuthService) { }

  /*firebaseConfig = {
    //...
  };
  app = initializeApp(this.firebaseConfig);
  db = getFirestore(this.app);
  auth = getAuth(this.app);*/

  model = new Utilisateur(0, '', '', '', '');

  type = "";
  idLoc = sessionStorage.getItem("idLoc");
  idCons = sessionStorage.getItem("idCons");
  message: string | null = "";
  message_erreur: string | null = "";

  ngOnInit(): void {
    this.message = sessionStorage.getItem("message");
    this.message_erreur = sessionStorage.getItem("message_erreur");
    sessionStorage.removeItem("message");
    sessionStorage.removeItem("message_erreur");
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
                        window.location.reload();
                      } else {
                        this.authService.estLocataire(this.model.email).subscribe({
                          next: (response) => {
                            if (response) {
                              this.type = "Loc";
                              sessionStorage.setItem("idLoc", "" + id);
                              window.location.reload();
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

}

