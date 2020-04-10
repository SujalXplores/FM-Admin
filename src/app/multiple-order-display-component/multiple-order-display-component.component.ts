import { Component, OnInit } from '@angular/core';
import { order } from '../order/order';
import { OrderdataService } from '../order/orderdata.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-multiple-order-display-component',
  templateUrl: './multiple-order-display-component.component.html',
  styleUrls: ['./multiple-order-display-component.component.css']
})
export class MultipleOrderDisplayComponentComponent implements OnInit {

  order_id: number;
  order_total:number;
  pro_photo: string;
  fk_u_email_id: string;
  order_date: string;
  payment_type: string;
  order_status: string;
  order_amount: number;
  ordermultiple: any[] = [];
  constructor(public orderService: OrderdataService, public _activated_routes: ActivatedRoute) { }

  ngOnInit(): void {
    this.order_id = this._activated_routes.snapshot.params['order_id'];
    this.orderService.getProductById(this.order_id).subscribe(
      (data: any[]) => {
        console.log(data);
        this.ordermultiple = data;
        this.fk_u_email_id = data[0].fk_u_email_id;
        this.order_date = data[0].order_date;
        this.payment_type = data[0].payment_type;
        this.order_status = data[0].order_status;
        this.order_amount = data[0].order_amount;
      }
    )
  }
}