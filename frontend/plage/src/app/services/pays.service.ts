import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pays } from '../models/pays';

@Injectable({
  providedIn: 'root'
})
export class PaysService {

  link="http://localhost:8080/api/"

  constructor(private http: HttpClient) { }

  getPays(){
    return this.http.get<Pays[]>(this.link+"pays/");
  }
}
