import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WalletdataService {

  constructor(private _http: HttpClient) { }

  public url: string = 'http://localhost:3000/wallet/';

  getwallet() {
    return this._http.get(this.url);
  }
}
