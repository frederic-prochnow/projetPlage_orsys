import { Component } from '@angular/core';
import { Utilisateur } from './../../../models/utilisateur';

@Component({
  selector: 'app-locataire-liste',
  templateUrl: './locataire-liste.component.html',
  styleUrls: ['./locataire-liste.component.css']
})
export class LocataireListeComponent {

  displayedColumnsValider: string[] = ['nom', 'email', 'Date inscription', 'pays', 'Valider'];
  displayedColumns: string[] = ['nom', 'email', 'Date inscription', 'pays'];
  dataSource : Utilisateur[] = [];

}
