import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Location } from '../models/location';
import { Parasol } from '../models/parasol';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  link = 'http://localhost:8080/api/';

  constructor(private http: HttpClient, private authService: AuthService) {}
  
  locationATraiter() {
    const id = this.authService.getTokenCons();
    return this.http.get<Location[]>(this.link+"locations/atraiter/"+id);
  }

  location() {
    const id = this.authService.getTokenCons();
    return this.http.get<Location[]>(this.link+"locations/"+id);
  }

  locationLocataire() {
    const id = this.authService.getTokenLoc();
    return this.http.get<Location[]>(this.link+"locations/locataire/"+id);
  }

  validerLocation(idLocation: number) {
    return this.http.get<boolean>(this.link+"locations/valider/"+idLocation);
  }

  annulerLocation(idLocation: number) {
    return this.http.get<boolean>(this.link+"locations/annuler/"+idLocation);
  }

  nouvelleLocation(date:string, remarques: string, montant:number){
    const idCons = 2;
    const idLoc = this.authService.getTokenLoc();
    return this.http.post<number>(this.link+"location/creation/?date="+date+"&idCons="+idCons+"&idLoc="+idLoc+"&remarques="+remarques+"&montant="+montant, {})
  }

  ajoutParasolsLocation(idLocation: number, idParasol:number){
    return this.http.post<number>(this.link+"location/creation/parasols/?idLocation="+idLocation+"&idParasol="+idParasol, {});
  }
}
