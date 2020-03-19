import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  public url1: string = "http://localhost:3000/user/";
  public emailurrl: string = "http://localhost:3000/email/"

  constructor(public _http: HttpClient) { }

  passwordMail(u_email_id, message, u_password) {
    console.log(u_email_id, message, u_password);
    let body = {
      "email_id": u_email_id,
      "message": u_password,
      "subject": message
    }
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.emailurrl, body, { headers: header });
  }
  
  getUserByEmail(u_email_id: string) {
    return this._http.get(this.url1 + u_email_id);
  }
}
