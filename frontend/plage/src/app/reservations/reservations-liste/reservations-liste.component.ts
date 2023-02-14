import { Component, Input, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Location } from '../../models/location';

@Component({
  selector: 'app-reservations-liste',
  templateUrl: './reservations-liste.component.html',
  styleUrls: ['./reservations-liste.component.css']
})
export class ReservationsListeComponent {

  @Input()
  dataSource : MatTableDataSource<Location> | any;

  displayedColumns: string[] = ['#', 'Debut', 'Fin', 'Montant', 'Statut', 'Details'];

  cardDetailsVisible = false;

  clickDetail() {
    this.cardDetailsVisible = !this.cardDetailsVisible;
    console.log(this.dataSource.data)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
