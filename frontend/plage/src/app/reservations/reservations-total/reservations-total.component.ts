import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service';
import { Location } from './../../models/location';

@Component({
  selector: 'app-reservations-total',
  templateUrl: './reservations-total.component.html',
  styleUrls: ['./reservations-total.component.css']
})
export class ReservationsTotalComponent implements OnInit{

  dataSource : Location[] = [];

  constructor(private locServ: LocationService) { }

  ngOnInit(): void {
    this.locServ.location().subscribe({
      next: (response) => {
        this.dataSource = response;
      }
    });
  }
}
