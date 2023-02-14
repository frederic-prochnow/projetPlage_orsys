import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

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

  constructor(public dialog: MatDialog) {}

  async deconnection() {
    sessionStorage.removeItem("idCons");
    this.dialog.open(PopupDeconnexionComponent);
    await new Promise(f => setTimeout(f, 1000));
    window.location.reload();
  }
}
