import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { users } from '../users/users';

@Injectable({
  providedIn: 'root'
})
export class SignupdataService {

  url: string = 'http://localhost:3000/signup/';
  constructor(private _http: HttpClient) { }

  signup(obj: users) {
    let body = JSON.stringify(obj);
    let head = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url, body, {headers: head});
  }
}
