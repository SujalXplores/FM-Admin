import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class ProductPhotodataService {
  constructor(private http: HttpClient) { }

  url: string = environment.db + 'product_photo/';

  getAllProductPhoto() {
    return this.http.get(this.url);
  }

  addProductPhoto(item: FormData) {
    return this.http.post(this.url, item);
  }

  deleteProductPhoto(pro_photo_id: number) {
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(this.url + pro_photo_id, { headers: x });
  }

  editProductPhoto(pro_photo_id: number) {
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.url + pro_photo_id, { headers: x });
  }

  updateProductPhoto(pro_photo_id, item) {
    return this.http.put(this.url + pro_photo_id, item);
  }
}
