import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WalletdataService {

  constructor(private _http: HttpClient) { }

  public url: string = 'http://localhost:3000/wallet/';
  public url1: string = "http://localhost:3000/user/";

  getUserByEmail(u_email_id: string) {
    return this._http.get(this.url1 + u_email_id);
  }

  getwallet() {
    return this._http.get(this.url);
  }
}
