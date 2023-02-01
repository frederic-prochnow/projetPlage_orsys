import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { File } from '../models/file';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  link = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) {}
  
  recupererFiles() {
    return this.http.get<File[]>(this.link+"files");
  }
  
}
