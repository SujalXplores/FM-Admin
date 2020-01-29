import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersdataService {

  url:string='http://localhost:3000/user/';
  deleteurl: string= 'http://localhost:3000/userdelete/';
  constructor(private _http:HttpClient) { }
  deleteall(item: string[]) {
    let body = JSON.stringify(item);
     let x = new HttpHeaders().set('Content-Type', 'application/json');
     return this._http.post(this.deleteurl,body , {headers: x} );
  }
  getAllUsers() {
    return this._http.get(this.url);
  }
  deleteUsers(u_email_id: string) {
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url + u_email_id, {headers: x});
   }
   addUsers(item: FormData) {
     console.log(item);
    //let body = JSON.stringify(item);
    //let x = new HttpHeaders().set('Content-Type', 'application/json');
    //return this._http.post(this.url, body, {headers: x});
    return this._http.post(this.url,item);
  }
   editUser(u_email_id: string) {
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + u_email_id, {headers: x});
  }
  updateUser(u_email_id , item) {
     // let body = JSON.stringify(item);
     // let x = new HttpHeaders().set('Content-Type', 'application/json');
     return this._http.put(this.url + u_email_id, item );
  }
}
