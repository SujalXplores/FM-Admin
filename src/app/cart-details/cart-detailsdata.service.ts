import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { cart_details } from '../cart-details/cart_details';

@Injectable({
  providedIn: 'root'
})
export class CartDetailsdataService {

  constructor(private _http: HttpClient) { }

  url: string = 'http://localhost:3000/cart_details/';

  getAllCartDetail() {
    return this._http.get(this.url);
  }

  deleteCart(cart_detail_id: number) {
     let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url + cart_detail_id, {headers: x});
   }
   addCart(item: cart_details) {
     let body = JSON.stringify(item);
     let x = new HttpHeaders().set('Content-Type', 'application/json');
     return this._http.post(this.url, body, {headers: x});
  }
   editCart(cart_detail_id: number) {
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + cart_detail_id, {headers: x});
  }
  updateCart(item: cart_details) {
     let body = JSON.stringify(item);
     let x = new HttpHeaders().set('Content-Type', 'application/json');
     return this._http.put(this.url + item.cart_detail_id, body , {headers: x} );
  }
}
