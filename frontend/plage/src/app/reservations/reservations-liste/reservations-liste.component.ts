import { Component, Input, OnInit } from '@angular/core';
import { Location } from 'src/app/models/location';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-reservations-liste',
  templateUrl: './reservations-liste.component.html',
  styleUrls: ['./reservations-liste.component.css']
})
export class ReservationsListeComponent {
  
  @Input()
  model: Location[] = [];

  cardDetailsVisible = false;

  clickDetail() {
    this.cardDetailsVisible = !this.cardDetailsVisible;
  }
}
