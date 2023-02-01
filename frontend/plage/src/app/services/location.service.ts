import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Location } from '../models/location';
import { Parasol } from '../models/parasol';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  link = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) {}
  
  locationATraiter() {
    return this.http.get<Location[]>(this.link+"locations/atraiter/1");
  }

  nouvelleLocation(date:string, idCons:number, idLoc:string, parasols:Parasol[], remarques: string, montant:number){
    return this.http.post(this.link+"location/creation/", {date:date, idCons:idCons, idLoc:idLoc, parasols:parasols, remarques:remarques, montant:montant})
  }
}
