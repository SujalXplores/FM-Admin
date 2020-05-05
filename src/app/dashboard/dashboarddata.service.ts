import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboarddataService {

  url: string = 'http://localhost:3000/dashboardTrendingPro/';

  constructor(public _http: HttpClient) { }

  getTopOrder(){
    return this._http.get(this.url);
  }
}
