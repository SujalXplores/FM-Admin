import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {
  public url1: string = "http://localhost:3000/user/";

  constructor(public _http: HttpClient) { }

  getUserByEmail(u_email_id: string) {
    return this._http.get(this.url1 + u_email_id);
  }
}
