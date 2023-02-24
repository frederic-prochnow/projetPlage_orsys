import { Component, Input, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { async } from 'rxjs';
import { Location } from '../../models/location';

@Component({
  selector: 'app-reservations-liste',
  templateUrl: './reservations-liste.component.html',
  styleUrls: ['./reservations-liste.component.css']
})
export class ReservationsListeComponent implements OnInit{

  @Input()  data: Location[] = [];
  dataSource = new  MatTableDataSource<Location>();

  displayedColumns: string[] = ['#', 'Debut', 'Fin', 'Montant', 'Statut', 'Details'];

  cardDetailsVisible = false;

  async ngOnInit() {
    this.dataSource = new MatTableDataSource<Location>(this.data);
  }

  clickDetail() {
    this.cardDetailsVisible = !this.cardDetailsVisible;
    console.log(this.dataSource.data)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
