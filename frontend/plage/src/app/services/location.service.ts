import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Location } from '../models/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  link = 'http://localhost:8080/api/locations/';

  constructor(private http: HttpClient) {}
  
  locationATraiter() {
    const id = sessionStorage.getItem("idCons");
    return this.http.get<Location[]>(this.link+"atraiter/"+id);
  }

  location() {
    const id = sessionStorage.getItem("idCons");
    return this.http.get<Location[]>(this.link+"locataire/"+id);
  }

  locationLocataire() {
    const id = sessionStorage.getItem("idLoc");
    return this.http.get<Location[]>(this.link+id);
  }

  validerLocation(idLocation: number) {
    this.http.get(this.link+"valider/"+idLocation);
  }

  annulerLocation(idLocation: number) {
    this.http.get(this.link+"annuler/"+idLocation);
  }
}
