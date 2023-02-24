import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-locataire',
  templateUrl: './nav-locataire.component.html',
  styleUrls: ['./nav-locataire.component.css']
})
export class NavLocataireComponent {

  constructor(private router: Router) {}

  deconnection() {
    sessionStorage.removeItem("idLoc");
    sessionStorage.setItem("message","Deconnexion de l'espace locataire réussi !");
    this.router.navigate(['/']);
  }
}
