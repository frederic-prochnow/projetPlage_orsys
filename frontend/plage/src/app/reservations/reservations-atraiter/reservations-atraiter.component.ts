import { Component, OnInit } from '@angular/core';
import { Location } from '../../models/location';
import { LocationService } from '../../services/location.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-reservations-atraiter',
  templateUrl: './reservations-atraiter.component.html',
  styleUrls: ['./reservations-atraiter.component.css']
})
export class ReservationsATraiterComponent implements OnInit {

  dataSource : MatTableDataSource<Location> | any;

  constructor(private locServ: LocationService) { }

  ngOnInit(): void {
    this.locServ.locationATraiter().subscribe({
      next: (response) => {
        this.dataSource = new MatTableDataSource(response);
      }
    });
  }
}
