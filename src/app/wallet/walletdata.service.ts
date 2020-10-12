import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class WalletdataService {

  constructor(private _http: HttpClient) { }

  public url: string = environment.db + 'wallet/';
  public url1: string = environment.db + "user/";

  getUserByEmail(u_email_id: string) {
    return this._http.get(this.url1 + u_email_id);
  }

  getwallet() {
    return this._http.get(this.url);
  }
}
