import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {
  constructor(public _http: HttpClient) { }

  public url1: string = environment.db + "user/";
  public emailurrl: string = environment.db + "forgot_pass/";
  public changePasswordURL: string = environment.db + 'u_password/';

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

  changePassword(item) {
    let body = JSON.stringify(item);
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.put(this.changePasswordURL, body, { headers: x });
  }
}