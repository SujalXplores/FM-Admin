import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderdataService } from '../orderdata.service';
import { order } from '../order';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-editorder',
  templateUrl: './editorder.component.html',
  styleUrls: ['./editorder.component.css']
})
export class EditorderComponent implements OnInit {
  constructor(private _act_route: ActivatedRoute, private _orderdata: OrderdataService, private _router: Router) { }
  private unsubscribe = new Subject();
  order_id1: number;
  order_amount1: string;
  order_date1: Date;
  fk_u_email_id1: number;
  payment_type1: string;
  order_status1: string;

  ngOnInit() {
    this.order_id1 = this._act_route.snapshot.params["order_id"];
    this._orderdata.editOrder(this.order_id1).pipe(takeUntil(this.unsubscribe)).subscribe(
      (data: order) => {
        this.order_id1 = data[0].order_id;
        this.order_amount1 = data[0].order_amount;
        this.order_date1 = data[0].order_date;
        this.fk_u_email_id1 = data[0].fk_u_email_id;
        this.payment_type1 = data[0].payment_type;
        this.order_status1 = data[0].order_status;
      }
    );
  }

  OnOrderEdit(f) {
    this._orderdata.updateOrder(f.value).pipe(takeUntil(this.unsubscribe)).subscribe(
      (data: any) => {
        this._router.navigate(['/nav/order']);
      }
    );
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}