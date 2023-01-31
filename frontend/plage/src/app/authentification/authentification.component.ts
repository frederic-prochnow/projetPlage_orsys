import { Component } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent{

  constructor(private authService: AuthService) {}

  model = new Utilisateur(0,'','','','');

  type = "";
  idLoc = sessionStorage.getItem("idLoc");
  idCons = sessionStorage.getItem("idCons");


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
          }else{
            this.authService.seConnecterConcessionnaire(this.model).subscribe({
              next: (response) => {
                if(response != -1){
                  this.type = "Cons";
                  sessionStorage.setItem("idCons",""+response);
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
