import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { users } from './users';
@Injectable({
  providedIn: 'root'
})
export class UsersdataService {
  constructor(private _http: HttpClient) { }

  url: string = 'http://localhost:3000/user/';
  url1: string = 'http://localhost:3000/uimage/';
  deleteurl: string = 'http://localhost:3000/userdelete/';

  deleteall(item: string[]) {
    let body = JSON.stringify(item);
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.deleteurl, body, { headers: x });
  }

  getAllUsers() {
    return this._http.get(this.url);
  }

  deleteUsers(u_email_id: string) {
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url + u_email_id, { headers: x });
  }

  addUsers(item: FormData) {
    return this._http.post(this.url, item);
  }

  editUser(u_email_id: string) {
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + u_email_id, { headers: x });
  }

  updateUser(u_email_id, item: users) {
    let body = JSON.stringify(item);
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.put(this.url + u_email_id, body, { headers: x });
  }

  updateUserimage(u_email_id, item) {
    return this._http.put(this.url1 + u_email_id, item);
  }
}