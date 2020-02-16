import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendMailService {

  url:string="http://localhost:3000/email/";
  constructor(private _http:HttpClient) { }

  generatemail(item){
    console.log(item);
    let body=JSON.stringify(item);
    let header=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:header});
  }
}
