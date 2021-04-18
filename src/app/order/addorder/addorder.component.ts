import { Component, OnInit } from '@angular/core';
import { OrderdataService } from '../orderdata.service';
import { Router } from '@angular/router';
import { order } from '../order';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddorderComponent implements OnInit {
  constructor(private _orderdata: OrderdataService, private _router: Router) { }
  private unsubscribe = new Subject();
  arrorder: order[] = [];
  value = '';

  ngOnInit() { }

  OnOrderAdd(f) {
    this._orderdata.addOrder(f.value).pipe(takeUntil(this.unsubscribe)).subscribe(
      (data: any) => {
        this.arrorder.push(f.value);
        this._router.navigate(['/nav/order']);
      }
    );
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}