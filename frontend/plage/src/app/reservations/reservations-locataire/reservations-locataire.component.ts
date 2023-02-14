import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-reservations-locataire',
  templateUrl: './reservations-locataire.component.html',
  styleUrls: ['./reservations-locataire.component.css']
})
export class ReservationsLocataireComponent implements OnInit {

  dataSource : MatTableDataSource<Location> | any;

  constructor(private locServ: LocationService) { }

  ngOnInit(): void {
    this.locServ.locationLocataire().subscribe({
      next: (response) => {
        this.dataSource = new MatTableDataSource(response);
      }
    });
  }
}