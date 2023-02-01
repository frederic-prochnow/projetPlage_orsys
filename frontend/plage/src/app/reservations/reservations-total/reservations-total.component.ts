import { Component, OnInit } from '@angular/core';
import { Location } from 'src/app/models/location';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-reservations-total',
  templateUrl: './reservations-total.component.html',
  styleUrls: ['./reservations-total.component.css']
})
export class ReservationsTotalComponent implements OnInit{

  model: Location[] = [];

  constructor(private locServ: LocationService) { }

  ngOnInit(): void {
    this.locServ.location().subscribe({
      next: (response) => {
        this.model = response;
      }
    });
  }
}
