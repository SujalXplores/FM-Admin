import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tracking } from './tracking';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class TrackdataService {
  constructor(private _http: HttpClient) { }

  public url: string = environment.db + 'track/';
  public deleteUrl: string = environment.db + 'track_Delete/';

  deleteAll(item: number[]) {
    let body = JSON.stringify(item);
    let head = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.deleteUrl, body, { headers: head });
  }

  getAllTrack() {
    return this._http.get(this.url);
  }

  deleteTrack(track_id: number) {
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url + track_id, { headers: x });
  }

  getByIdTrack(track_id: number) {
    return this._http.get(this.url + track_id);
  }

  addTrack(item) {
    let body = JSON.stringify(item);
    let head1 = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url, body, { headers: head1 });
  }

  updateTrack(item: tracking) {
    let body = JSON.stringify(item);
    let head1 = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.put(this.url + item.track_id, body, { headers: head1 });
  }
}