import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Parasol } from '../models/parasol';

@Injectable({
  providedIn: 'root'
})
export class ParasolService {
  link="http://localhost:8080/api/parasol/liste/"

  constructor(private http: HttpClient) { }

  recupererParasolsATraiter(cons_id:string, date:string){
    return this.http.get<Parasol[]>(this.link+"aTraiter/"+cons_id+"/"+date);
  }

  recupererParasolsValider(cons_id:string, date:string){
    return this.http.get<Parasol[]>(this.link+"valider/"+cons_id+"/"+date);
  }
}
