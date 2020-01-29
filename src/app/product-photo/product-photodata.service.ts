import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { product_photo } from './product-photo';

@Injectable({
  providedIn: 'root'
})
export class ProductPhotodataService {

  url: string = 'http://localhost:3000/product_photo/';
  constructor(private http: HttpClient) { }

  getAllProductPhoto() {
    return this.http.get(this.url);
  }
  addProductPhoto(item: FormData) {
    console.log(item);
    // let body = JSON.stringify(item);
    // let x = new HttpHeaders().set('Content-Type', 'application/json');
    // return this.http.post(this.url, body, {headers: x});
    return this.http.post(this.url, item);
  }
  deleteProductPhoto(pro_photo_id: number) {
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(this.url + pro_photo_id, {headers: x});
  }
  editProductPhoto(pro_photo_id: number) {
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.url + pro_photo_id, {headers: x});
  }
  updateProductPhoto(pro_photo_id , item) {
    //  let body = JSON.stringify(item);
    //  let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(this.url + pro_photo_id, item);
  }
}
