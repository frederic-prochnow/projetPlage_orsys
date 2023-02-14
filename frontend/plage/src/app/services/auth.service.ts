import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utilisateur } from '../models/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  link = 'http://localhost:8080/api/utilisateur/';

  constructor(private http: HttpClient) {}

  emailExiste(email: string){
    return this.http.get<boolean>(this.link+email);
  }

  estLocataire(email: string){
    return this.http.get<boolean>(this.link+"connection/locataire/"+email);
  }

  estConcessionnaire(email: string){
    return this.http.get<boolean>(this.link+"connection/concessionnaire/"+email);
  }

  seConnecter(utilisateur: Utilisateur) {
    return this.http.get<number>(this.link+"connection/"+utilisateur.email+"/"+utilisateur.motDePasse);
  }
}
