import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartdataService {

  url:string='http://localhost:3000/cart/';
  constructor(private _http:HttpClient) { }
  getAllCart() {
    return this._http.get(this.url);
  }
  deleteCart(cart_id: number) {
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url + cart_id, {headers: x});
   }
   addCart(item: cart) {
    let body = JSON.stringify(item);
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url, body, {headers: x});
  }
   editCart(cart_id: number) {
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + cart_id, {headers: x});
  }
  updateCart(item: cart) {
     let body = JSON.stringify(item);
     let x = new HttpHeaders().set('Content-Type', 'application/json');
     return this._http.put(this.url + item.cart_id, body , {headers: x} );
  }
}
