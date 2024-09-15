import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { async, Observable } from 'rxjs';
import { LocationService } from '../../../services/location.service';
import { Location } from './../../../models/location';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-reservations-liste',
  templateUrl: './reservations-liste.component.html',
  styleUrls: ['./reservations-liste.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class ReservationsListeComponent implements OnInit, AfterViewInit{

  @Input('dataType') type : string | any;

  dataSource: MatTableDataSource<Location>;

  displayedColumns: string[] = ['#', 'Debut', 'Fin', 'Montant', 'Statut'];
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];
  expandedElement: Location | null = null;

  panelOpenState = false;

  //@ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private locServ: LocationService) {
    this.dataSource = new MatTableDataSource();
    this.sort = new MatSort();
  }

  ngOnInit() {
    let data : Observable<Location[]>;
    if(this.type == 'total'){
      data = this.locServ.location();
    }else if(this.type == 'locataire'){
      data = this.locServ.locationLocataire();
    }else if(this.type == 'aTraiter') {
      data = this.locServ.locationATraiter();
    }else{
      data = this.locServ.location();
    }

    data.subscribe({
      next: (response) => {
        this.dataSource = new MatTableDataSource(response);
      }
    });
  }

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
