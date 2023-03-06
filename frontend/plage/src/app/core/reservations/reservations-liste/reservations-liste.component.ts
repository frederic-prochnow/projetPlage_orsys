import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { async, Observable } from 'rxjs';
import { LocationService } from '../../../services/location.service';
import { Location } from './../../../models/location';

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
export class ReservationsListeComponent implements OnInit{

  @Input('dataType') type : string | any;

  dataSource : Location[] = [];

  displayedColumns: string[] = ['#', 'Debut', 'Fin', 'Montant', 'Statut'];
  displayedColumnsWithExpand = [...this.displayedColumns, 'expand'];
  expandedElement: Location | null = null;

  cardDetailsVisible = false;

  constructor(private locServ: LocationService) {
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
        this.dataSource = response;
      }
    });
  }

  clickDetail() {
    this.cardDetailsVisible = !this.cardDetailsVisible;
  }
}
