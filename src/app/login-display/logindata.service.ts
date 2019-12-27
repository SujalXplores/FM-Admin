import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogindataService {

  url: string = 'http://localhost:3000/login/';
  constructor(private http: HttpClient) { }

  login(obj) {
    const body = JSON.stringify(obj);
    const head = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url, body, {headers: head});
  }
}