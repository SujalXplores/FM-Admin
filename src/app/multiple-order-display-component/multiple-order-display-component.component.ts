import { Component, OnInit } from '@angular/core';
import { OrderdataService } from '../order/orderdata.service';
import { ActivatedRoute } from '@angular/router';
import { GetUserService } from '../main-nav/get-user.service';
@Component({
  selector: 'app-multiple-order-display-component',
  templateUrl: './multiple-order-display-component.component.html',
  styleUrls: ['./multiple-order-display-component.component.css']
})
export class MultipleOrderDisplayComponentComponent implements OnInit {
  constructor(
    private _user: GetUserService,
    public orderService: OrderdataService,
    public _activated_routes: ActivatedRoute
  ) { }

  order_id: number;
  order_total: number;
  pro_photo: string;
  fk_u_email_id: string;
  order_date: string;
  payment_type: string;
  order_status: string;
  order_amount: number;
  ordermultiple: any[] = [];
  user_addr: string;
  user_mob: number;
  orderId: number;
  invoice_name: string;

  ngOnInit(): void {
    this.order_id = this._activated_routes.snapshot.params['order_id'];
    this.orderService.getProductById(this.order_id).subscribe(
      (data: any[]) => {
        this.ordermultiple = data;
        this.orderId = data[0].fk_order_id;
        this.fk_u_email_id = data[0].fk_u_email_id;
        this.order_date = data[0].order_date;
        this.payment_type = data[0].payment_type;
        this.order_status = data[0].order_status;
        this.order_amount = data[0].order_amount;
        this.invoice_name = 'invoice'+this.order_date+'ID'+this.orderId+'.pdf';
        this._user.getUserByEmail(this.fk_u_email_id).subscribe((data1) => {
          this.user_addr = data1[0].u_address;
          this.user_mob = data1[0].u_mobileno;
        });
      }
    );
  }
}