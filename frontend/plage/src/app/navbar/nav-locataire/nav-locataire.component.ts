import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav-locataire',
  templateUrl: './nav-locataire.component.html',
  styleUrls: ['./nav-locataire.component.css']
})
export class NavLocataireComponent {

  constructor(private router: Router, private authService: AuthService) {}

  deconnection() {
    this.authService.logoutLoc();
    sessionStorage.setItem("message","Deconnexion de l'espace locataire réussi !");
    //this.router.navigateByUrl('/accueil');
    window.location.reload();
  }
}
