import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EdituserdataService {
  private url: string = 'http://localhost:3000/user/';
  constructor(private _http: HttpClient) { }
}
