import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetUserService {
  constructor(public _http: HttpClient) { }

  public url1: string = "http://localhost:3000/user/";

  getUserByEmail(u_email_id: string) {
    return this._http.get(this.url1 + u_email_id);
  }
}