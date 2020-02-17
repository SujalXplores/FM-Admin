import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { order_detail } from './order_detail';

@Injectable({
  providedIn: 'root'
})
export class OrderDetaildataService {

  url: string = 'http://localhost:3000/order_detail/';
  constructor(private http: HttpClient) { }

  getAllOrderDetail() {
    return this.http.get(this.url);
  }

  deleteOrderDetail(order_detail_id: number) {
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(this.url + order_detail_id, {headers: x});
  }
  editOrder(order_detail_id: number) {
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.url + order_detail_id, {headers: x});
  }
  updateOrder(item: order_detail) {
     let body = JSON.stringify(item);
     let x = new HttpHeaders().set('Content-Type', 'application/json');
     return this.http.put(this.url + item.order_detail_id, body , {headers: x} );
  }
}
