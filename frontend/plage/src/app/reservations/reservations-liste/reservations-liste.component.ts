import { Component, Input, OnInit } from '@angular/core';
import { Location } from 'src/app/models/location';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-reservations-liste',
  templateUrl: './reservations-liste.component.html',
  styleUrls: ['./reservations-liste.component.css']
})
export class ReservationsListeComponent implements OnInit {

  model: Location[] = [];

  @Input()
  aTraiter!: boolean;

  @Input()
  total!: boolean;

  @Input()
  locataire!: boolean;

  constructor(private locServ: LocationService) { }

  ngOnInit(): void {
    if (this.aTraiter) {
      this.locServ.locationATraiter().subscribe({
        next: (response) => {
          this.model = response;
        }
      });
    } else if (this.total) {
      this.locServ.location().subscribe({
        next: (response) => {
          this.model = response;
        }
      });
    } else if (this.locataire) {
      this.locServ.locationLocataire().subscribe({
        next: (response) => {
          this.model = response;
        }
      });
    }
  }

  cardDetailsVisible = false;

  clickDetail() {
    this.cardDetailsVisible = !this.cardDetailsVisible;
  }
}
