import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersdataService {

  url:string="http://localhost:3000/user/";
  constructor(private _http:HttpClient) { }
  getAllUsers() {
    return this._http.get(this.url);
  }
  deleteUsers(name: string) {
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url + name, {headers: x});
   }
}
