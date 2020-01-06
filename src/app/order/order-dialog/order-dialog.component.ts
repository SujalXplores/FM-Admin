import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { order } from '../order';

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.css']
})
export class OrderDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<OrderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: order) { }

   o_id: number;
   o_amount: number;
   o_date: Date;
   fk_user_id: string;
   pay_type: string;
   o_status: string;

  ngOnInit() {
    this.o_id = this.data.order_id;
    this.o_amount = this.data.order_amount;
    this.o_date = this.data.order_date;
    this.fk_user_id = this.data.fk_u_email_id;
    this.pay_type = this.data.payment_type;
    this.o_status = this.data.order_status;
  }

  onCancelClick() {
    this.dialogRef.close();
  }

}
