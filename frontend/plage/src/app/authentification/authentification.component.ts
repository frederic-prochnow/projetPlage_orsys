import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit{

  constructor(private authService: AuthService) {}

  model = new Utilisateur(0,'','','','');

  type = "";
  idLoc = sessionStorage.getItem("idLoc");
  idCons = sessionStorage.getItem("idCons");
  message : string | null = "";
  message_erreur : string | null = "";

  ngOnInit(): void {
    this.message = sessionStorage.getItem("message");
    this.message_erreur = sessionStorage.getItem("message_erreur");
    sessionStorage.removeItem("message");
    sessionStorage.removeItem("message_erreur");
  }

  authentification() {
    if(this.idLoc != null){
      this.type = "Loc";
    }else if(this.idCons != null){
      this.type = "Cons";
    }else {
      this.authService.seConnecterLocataire(this.model).subscribe({
        next: (response) => {
          if(response != -1){
            this.type = "Loc";
            sessionStorage.setItem("idLoc",""+response);
            window.location.reload();
          }else{
            this.authService.seConnecterConcessionnaire(this.model).subscribe({
              next: (response) => {
                if(response != -1){
                  this.type = "Cons";
                  sessionStorage.setItem("idCons",""+response);
                  window.location.reload();
                }else{
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
