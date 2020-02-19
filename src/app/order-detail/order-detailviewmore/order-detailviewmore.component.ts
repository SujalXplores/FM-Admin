import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { order_detail } from '../order_detail';

@Component({
  selector: 'app-order-detailviewmore',
  templateUrl: './order-detailviewmore.component.html',
  styleUrls: ['./order-detailviewmore.component.css']
})
export class OrderDetailviewmoreComponent implements OnInit {

  od_id: number;
  fk_order_id: number;
  fk_pro_id: number;
  qty: number;
  pro_name:string;
  constructor(public dialogref: MatDialogRef<OrderDetailviewmoreComponent>,
    @Inject(MAT_DIALOG_DATA) public data: order_detail) { }

  ngOnInit() {
    this.od_id = this.data.order_detail_id;
    this.fk_order_id = this.data.fk_order_id;
    this.fk_pro_id = this.data.fk_pro_id;
    this.qty = this.data.qty;
    this.pro_name = this.data.pro_name;
  }
  onCancelClick() {
    this.dialogref.close();
}
}
