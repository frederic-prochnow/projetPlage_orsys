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
    const id = sessionStorage.getItem("idCons");
    return this.http.get<Location[]>(this.link+"locations/atraiter/"+id);
  }

  location() {
    const id = sessionStorage.getItem("idCons");
    return this.http.get<Location[]>(this.link+"locations/"+id);
  }

  locationLocataire() {
    const id = sessionStorage.getItem("idLoc");
    return this.http.get<Location[]>(this.link+"locations/locataire/"+id);
  }

  validerLocation(idLocation: number) {
    return this.http.get<boolean>(this.link+"locations/valider/"+idLocation);
  }

  annulerLocation(idLocation: number) {
    return this.http.get<boolean>(this.link+"locations/annuler/"+idLocation);
  }

  nouvelleLocation(date:string, idCons:number, idLoc:string, remarques: string, montant:number){
    return this.http.post<number>(this.link+"location/creation/?date="+date+"&idCons="+idCons+"&idLoc="+idLoc+"&remarques="+remarques+"&montant="+montant, {})
  }

  ajoutParasolsLocation(idLocation: number, idParasol:number){
    return this.http.post<number>(this.link+"location/creation/parasols/?idLocation="+idLocation+"&idParasol="+idParasol, {});
  }
}
