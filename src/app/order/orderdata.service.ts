import { Injectable } from '@angular/core';
import { order } from './order';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderdataService {

  url: string = 'http://localhost:3000/order/';
  constructor(private http: HttpClient) { }

  getAllOrder() {
    return this.http.get(this.url);
  }
  addOrder(item: order) {
    let body = JSON.stringify(item);
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url, body, {headers: x});
  }
  deleteOrder(order_id: string) {
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(this.url + order_id, {headers: x});
  }
  editOrder(order_id: string) {
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.url + order_id, {headers: x});
  }
  updateOrder(item: order) {
     let body = JSON.stringify(item);
     let x = new HttpHeaders().set('Content-Type', 'application/json');
     return this.http.put(this.url + item.order_id, body , {headers: x} );
  }
}
