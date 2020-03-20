import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { deliveryboy } from './deliveryboy';

@Injectable({
  providedIn: 'root'
})
export class DeliveryboydataService {

  url:string='http://localhost:3000/deliveryboy/';
  constructor(private _http:HttpClient) { }

  getAllDeliveryboy() {
    return this._http.get(this.url);
  }

  deleteDeliveryboy(deliveryboy_id: number) {
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url + deliveryboy_id, {headers: x});
  }

   addDeliveryboy(item:FormData) {
    // let body = JSON.stringify(item);
    // let x = new HttpHeaders().set('Content-Type', 'application/json');
    // return this._http.post(this.url, body, {headers: x});
       return this._http.post(this.url,item);
  }

   editDeliveryboy(deliveryboy_id: number) {
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + deliveryboy_id, {headers: x});
  }

  updateDeliveryboy(item: deliveryboy) {
     let body = JSON.stringify(item);
     let x = new HttpHeaders().set('Content-Type', 'application/json');
     return this._http.put(this.url + item.deliveryboy_id, body , {headers: x} );
  }
}
