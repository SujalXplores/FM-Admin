import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class LogindataService {
  constructor(private http: HttpClient) { }

  url: string = environment.db + 'login/';

  login(obj) {
    const body = JSON.stringify(obj);
    const head = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url, body, { headers: head });
  }
}