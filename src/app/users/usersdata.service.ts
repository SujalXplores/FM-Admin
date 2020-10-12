import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { users } from './users';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class UsersdataService {
  constructor(private _http: HttpClient) { }
  
  url: string = environment.db + 'user/';
  url1: string = environment.db + 'uimage/';
  password_url: string = environment.db + 'u_password/';
  deleteurl: string = environment.db + 'userdelete/';

  invokeRefresh = new EventEmitter();
  subsVar: Subscription;

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

  update_password(u_email_id, item) {
    let body = {
      "u_password": item.u_password,
      "new_password": item.new_password,
      "confirm_password": item.confirm_password,
      "u_email_id": u_email_id
    }
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.put(this.password_url + u_email_id, body, { headers: x });
  }

  updateUserimage(u_email_id, item) {
    return this._http.put(this.url1 + u_email_id, item);
  }

  onRefreshClick() {
    this.invokeRefresh.emit();
  }
}