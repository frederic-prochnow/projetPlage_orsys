import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil-locataire',
  templateUrl: './accueil-locataire.component.html',
  styleUrls: ['./accueil-locataire.component.css']
})
export class AccueilLocataireComponent {

  idLoc = sessionStorage.getItem("idLoc");
}
