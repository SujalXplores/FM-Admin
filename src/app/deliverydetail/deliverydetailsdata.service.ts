import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { deliverdetails } from './deliverydetail';
import { OrderBoyAssign } from './orderboyassign';

@Injectable({
  providedIn: 'root'
})
export class DeliverydetailsdataService {

  public url: string = 'http://localhost:3000/deliverdetails/';
  public deleteUrl: string = 'http://localhost:3000/dBoyDeatil_Delete/';
  urlorderAssigned: string = 'http://localhost:3000/orderAssigned/';
  urlorderNotAssigned: string = 'http://localhost:3000/orderNotAssigned/';
  urlDboy: string = 'http://localhost:3000/deliveryboy/';
  urlAddAsignOrders = 'http://localhost:3000/AddAssignedOrder/';
  urltrack = 'http://localhost:3000/track/';

  constructor(private _http: HttpClient) { }

  addTrack(item) {
    return this._http.post(this.urltrack, item);
  }

  deleteAll(item: number[]) {
    console.log(item);
    let body = JSON.stringify(item);
    let head = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.deleteUrl, body, { headers: head });
  }
  getAllDeliverDetails() {
    console.log(this.url);
    return this._http.get(this.url);
  }
  getAllAssignOrders() {
    return this._http.get(this.urlorderAssigned);
  }
  getAllDboy() {
    return this._http.get<deliverdetails[]>(this.urlDboy);
  }
  deleteDeliverDetails(detail_id: number) {
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url + detail_id, { headers: x });
  }
  getnotAssignedOrders() {
    return this._http.get<OrderBoyAssign[]>(this.urlorderNotAssigned);
  }
  addOrderAssigned(item) {
    return this._http.post(this.urlAddAsignOrders, item);
  }
  addDetails(item) {
    let body = JSON.stringify(item);
    let head1 = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url, body, { headers: head1 });
    // return this._http.post(this.url ,item);
  }
  getById(detail_id: number) {
    return this._http.get(this.url + detail_id);
  }
  updateDetails(item: deliverdetails) {
    let body = JSON.stringify(item);
    let head1 = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.put(this.url + item.detail_id, body, { headers: head1 });
  }
}
