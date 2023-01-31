import { Component, Input } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { Location } from '../../models/location';

@Component({
  selector: 'app-reservations-details',
  templateUrl: './reservations-details.component.html',
  styleUrls: ['./reservations-details.component.css']
})
export class ReservationsDetailsComponent {

  constructor(private locService: LocationService) {}

  @Input()
  item!: Location;

  valider(id: number){
    this.locService.validerLocation(id);
    let res = "Validation de la location num "+id +"réussi !";
    sessionStorage.setItem("message",res);
  }

  annuler(id: number){
    this.locService.annulerLocation(id);
    let res = "Annulation de la location num "+id +"réussi !";
    sessionStorage.setItem("message",res);
  }
}
