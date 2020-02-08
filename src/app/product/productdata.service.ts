import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductdataService {

  url: string = 'http://localhost:3000/product/';
  photo_url: string = 'http://localhost:3000/pro_photo/';
  deleteurl: string= 'http://localhost:3000/productdelete/';
  constructor(private http: HttpClient) { }

  deleteall(item: number[]) {
    let body = JSON.stringify(item);
     let x = new HttpHeaders().set('Content-Type', 'application/json');
     return this.http.post(this.deleteurl , body , {headers: x} );
  }

  getAllProducts() {
    return this.http.get(this.url);
  }

  getProductPhoto(pro_id: number) {
    return this.http.get(this.photo_url + pro_id);
  }

  addProduct(item: product) {
    let body = JSON.stringify(item);
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url, body, {headers: x});
  }

  deleteProduct(pro_id: number) {
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(this.url + pro_id, {headers: x});
  }
  editProduct(pro_id: number) {
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.url + pro_id, {headers: x});
  }

  updateProduct(pro_id: number,item: product) {
     let body = JSON.stringify(item);
     let x = new HttpHeaders().set('Content-Type', 'application/json');
     return this.http.put(this.url + pro_id, body , {headers: x} );
  }
}
