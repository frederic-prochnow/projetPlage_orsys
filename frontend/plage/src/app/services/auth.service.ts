import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utilisateur } from '../models/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  link = 'http://localhost:8080/api/utilisateur/';

  private tokenCons!: number;
  private tokenLoc!: number;

  loginCons(id: number) {
    this.tokenCons = id;
  }

  logoutCons() {
    this.tokenCons = -1;
  }

  loginLoc(id: number) {
    this.tokenLoc = id;
  }

  logoutLoc() {
    this.tokenLoc = -1;
  }

  getTokenCons(): number {
    return this.tokenCons;
  }

  getTokenLoc(): number {
    return this.tokenLoc;
  }

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
