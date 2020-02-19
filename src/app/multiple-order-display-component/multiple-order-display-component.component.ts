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
  ordermultiple: any[] = [];
  constructor(public orderService: OrderdataService, public _activated_routes: ActivatedRoute) { }

  ngOnInit(): void {
    this.order_id = this._activated_routes.snapshot.params['order_id'];
    this.orderService.getProductById(this.order_id).subscribe(
      (data: any[]) => {
        console.log(data);
        this.ordermultiple = data;
     //   this.order_total=
      }

    )
  }

}
