import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { deliverdetails } from './deliverydetail';
import { OrderBoyAssign } from './orderboyassign';
@Injectable({
  providedIn: 'root'
})
export class DeliverydetailsdataService {
  constructor(private _http: HttpClient) { }

  public url: string = 'http://localhost:3000/deliverdetails/';
  public deleteUrl: string = 'http://localhost:3000/dBoyDeatil_Delete/';
  public urlorderAssigned: string = 'http://localhost:3000/orderAssigned/';
  public urlorderNotAssigned: string = 'http://localhost:3000/orderNotAssigned/';
  public urlDboy: string = 'http://localhost:3000/deliveryboy/';
  public urlAddAsignOrders: string = 'http://localhost:3000/AddAssignedOrder/';
  public urltrack: string = 'http://localhost:3000/track/';

  addTrack(item) {
    return this._http.post(this.urltrack, item);
  }

  deleteAll(item: number[]) {
    let body = JSON.stringify(item);
    let head = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.deleteUrl, body, { headers: head });
  }

  getAllDeliverDetails() {
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