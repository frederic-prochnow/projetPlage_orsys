import { Component, Input } from '@angular/core';
import { Location } from '../models/location';

@Component({
  selector: 'app-reservations-details',
  templateUrl: './reservations-details.component.html',
  styleUrls: ['./reservations-details.component.css']
})
export class ReservationsDetailsComponent {

  @Input()
  item!: Location;
}
