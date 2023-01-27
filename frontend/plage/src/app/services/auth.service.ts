import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utilisateur } from '../models/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  link = 'http://localhost:8080/api/utilisateur/connection/';

  constructor(private http: HttpClient) {}

  seConnecterLocataire(utilisateur: Utilisateur) {
    return this.http.get<Boolean>(this.link+"locataire/"+utilisateur.email+"/"+utilisateur.motDePasse);
  }

  seConnecterConcessionnaire(utilisateur: Utilisateur) {
    return this.http.get<Boolean>(this.link+"concessionnaire/"+utilisateur.email+"/"+utilisateur.motDePasse);
  }
}
