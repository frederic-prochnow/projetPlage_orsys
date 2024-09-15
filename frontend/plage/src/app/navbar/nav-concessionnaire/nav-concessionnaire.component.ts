import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'popup-deconnexion',
  templateUrl: '../popup-deconnexion.html',
})
export class PopupDeconnexionComponent {}

@Component({
  selector: 'app-nav-concessionnaire',
  templateUrl: './nav-concessionnaire.component.html',
  styleUrls: ['./nav-concessionnaire.component.css']
})
export class NavConcessionnaireComponent {

  constructor(public dialog: MatDialog, private router: Router, private authService: AuthService) {}

  async deconnection() {
    this.authService.logoutCons();
    this.dialog.open(PopupDeconnexionComponent);
    await new Promise(f => setTimeout(f, 1000));
    this.dialog.closeAll();
    //this.router.navigateByUrl('/accueil');
    window.location.reload();
  }
}
