import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategorydataService {

  url: string = 'http://localhost:3000/category/';
  constructor(private http: HttpClient) { }

  getAllCategory() {
    return this.http.get(this.url);
  }

}
