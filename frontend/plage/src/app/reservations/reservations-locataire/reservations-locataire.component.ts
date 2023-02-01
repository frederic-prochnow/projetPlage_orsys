import { Component, OnInit } from '@angular/core';
import { Location } from 'src/app/models/location';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-reservations-locataire',
  templateUrl: './reservations-locataire.component.html',
  styleUrls: ['./reservations-locataire.component.css']
})
export class ReservationsLocataireComponent implements OnInit {

  model: Location[] = [];

  constructor(private locServ: LocationService) { }

  ngOnInit(): void {
    this.locServ.locationLocataire().subscribe({
      next: (response) => {
        this.model = response;
      }
    });
  }
}