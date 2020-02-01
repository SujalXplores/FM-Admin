import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { emailSend } from './email-class';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  url:string='http://localhost:3000/email/';
  constructor(private _http:HttpClient) { }

  emailSend(item) {
    let body = JSON.stringify(item);
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url, body, {headers: x});
  }

}
