import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {
  constructor(public _http: HttpClient) { }

  public url1: string = "http://localhost:3000/user/";
  public emailurrl: string = "http://localhost:3000/forgot_pass/";
  public changePasswordURL: string = 'http://localhost:3000/u_password/';

  passwordMail(u_email_id, message, u_password) {
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

  changePassword(obj: any) {
    return this._http.post(this.changePasswordURL, obj);
  }
}