import { Component } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent {

  constructor(private authService: AuthService) {}

  model = new Utilisateur(0,'','','','');

  type = "";

  authentification() {
    this.authService.seConnecterLocataire(this.model).subscribe({
      next: (response) => {
        if(response){
          this.type = "Loc";
        }else{
          this.authService.seConnecterConcessionnaire(this.model).subscribe({
            next: (response) => {
              if(response == true){
                this.type = "Cons";
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
