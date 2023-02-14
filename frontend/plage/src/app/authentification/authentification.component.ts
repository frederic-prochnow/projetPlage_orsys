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
      /*signInWithEmailAndPassword(this.auth, this.model.email, this.model.motDePasse)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
*/
      this.authService.seConnecterLocataire(this.model).subscribe({
        next: (response) => {
          if (response != -1) {
            this.type = "Loc";
            sessionStorage.setItem("idLoc", "" + response);
            window.location.reload();
          } else {
            this.authService.seConnecterConcessionnaire(this.model).subscribe({
              next: (response) => {
                if (response != -1) {
                  this.type = "Cons";
                  sessionStorage.setItem("idCons", "" + response);
                  window.location.reload();
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

