import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from './../models/utilisateur';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LocataireService {

  link = 'http://localhost:8080/api/';

  constructor(private http: HttpClient, private authService: AuthService) {}
  
  creerUtilisateur(dto: Utilisateur) {
    console.log(dto);
    //return this.http.post<boolean>(this.link+"utilisateur/creation/locataire/dto?"+JSON.stringify(dto), {});

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<boolean>(this.link+"locataire/creation?dto", dto, {headers : headers});
  }
}
