import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { product } from './product';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class ProductdataService {
  constructor(private http: HttpClient) { }

  url: string = environment.db + 'product/';
  photo_url: string = environment.db + 'pro_photo/';
  deleteurl: string = environment.db + 'productdelete/';

  deleteall(item: number[]) {
    let body = JSON.stringify(item);
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.deleteurl, body, { headers: x });
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
    return this.http.post(this.url, body, { headers: x });
  }

  deleteProduct(pro_id: number) {
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(this.url + pro_id, { headers: x });
  }

  editProduct(pro_id: number) {
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.url + pro_id, { headers: x });
  }

  updateProduct(pro_id: number, item: product) {
    let body = JSON.stringify(item);
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(this.url + pro_id, body, { headers: x });
  }
}