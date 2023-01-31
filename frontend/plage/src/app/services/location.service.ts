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
    return this.http.get<Location[]>(this.link+"atraiter/1");
  }
}
