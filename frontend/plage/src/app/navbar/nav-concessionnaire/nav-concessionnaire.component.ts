import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-concessionnaire',
  templateUrl: './nav-concessionnaire.component.html',
  styleUrls: ['./nav-concessionnaire.component.css']
})
export class NavConcessionnaireComponent {

  deconnection() {
    sessionStorage.removeItem("idCons");
    sessionStorage.setItem("message","Deconnexion concessionnaire réussi !");
    window.location.reload();
  }
}
