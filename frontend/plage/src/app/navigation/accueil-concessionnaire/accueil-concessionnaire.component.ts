import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil-concessionnaire',
  templateUrl: './accueil-concessionnaire.component.html',
  styleUrls: ['./accueil-concessionnaire.component.css']
})
export class AccueilConcessionnaireComponent {

  idCons = sessionStorage.getItem("idCons");
}
