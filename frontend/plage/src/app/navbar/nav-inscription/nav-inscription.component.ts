import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-inscription',
  templateUrl: './nav-inscription.component.html',
  styleUrls: ['./nav-inscription.component.css']
})
export class NavInscriptionComponent {

  annulerInscription() {
    sessionStorage.setItem("message","Inscription annuler !");
    window.location.reload();
  }
}
