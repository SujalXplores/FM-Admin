import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    return this._http.post(this.url,item);
  }

  editDeliveryboy(deliveryboy_id: number) {
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + deliveryboy_id, {headers: x});
  }

  updateDeliveryboy(deliveryboy_id , item) {
    return this._http.put(this.url + deliveryboy_id, item);
  }
}
