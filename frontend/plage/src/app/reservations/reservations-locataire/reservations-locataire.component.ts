import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service';
import { Location } from './../../models/location';

@Component({
  selector: 'app-reservations-locataire',
  templateUrl: './reservations-locataire.component.html',
  styleUrls: ['./reservations-locataire.component.css']
})
export class ReservationsLocataireComponent implements OnInit {

  dataSource : Location[] = [];

  constructor(private locServ: LocationService) { }

  ngOnInit(): void {
    this.locServ.locationLocataire().subscribe({
      next: (response) => {
        this.dataSource = response;
      }
    });
  }
}