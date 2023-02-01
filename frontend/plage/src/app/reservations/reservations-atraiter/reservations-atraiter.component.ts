import { Component, OnInit } from '@angular/core';
import { Location } from '../../models/location';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-reservations-atraiter',
  templateUrl: './reservations-atraiter.component.html',
  styleUrls: ['./reservations-atraiter.component.css']
})
export class ReservationsATraiterComponent implements OnInit {

  model: Location[] = [];

  constructor(private locServ: LocationService) { }

  ngOnInit(): void {
    this.locServ.locationATraiter().subscribe({
      next: (response) => {
        this.model = response;
      }
    });
  }
}
