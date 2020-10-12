import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class SendMailService {
  constructor(private _http: HttpClient) { }

  url: string = environment.db + "email/";

  generatemail(item) {
    let body = JSON.stringify(item);
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url, body, { headers: header });
  }
}