import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tracking } from './tracking';

@Injectable({
  providedIn: 'root'
})
export class TrackdataService {

  public url: string = 'http://localhost:3000/track/';
  public deleteUrl:string = 'http://localhost:3000/track_Delete/';

  constructor(private _http: HttpClient) { }

  deleteAll(item: number[]){
    console.log(item);
    let body = JSON.stringify(item);
    let head = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.deleteUrl , body , {headers:head});
  }


  getAllTrack() {
    return this._http.get(this.url);
  }

  deleteTrack(track_id: number) {
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url + track_id, { headers: x });
  }

  getByIdTrack(track_id: number) {
    console.log(track_id);
    return this._http.get(this.url + track_id);
  }

  addTrack(item) {
     let body = JSON.stringify(item);
     let head1 = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url , body, {headers:head1});
    // return this._http.post(this.url ,item);
  }

  updateTrack(item: tracking) {
    let body = JSON.stringify(item);
    let head1 = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.put(this.url + item.track_id, body, { headers: head1 });
  }

}
