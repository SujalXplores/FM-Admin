import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderBoyAssign } from '../orderboyassign';

@Component({
  selector: 'app-view-more',
  templateUrl: './view-more.component.html',
  styleUrls: ['./view-more.component.css']
})
export class ViewMoreComponent implements OnInit {
  
  constructor(
  public dialogRef: MatDialogRef<ViewMoreComponent>,
  @Inject(MAT_DIALOG_DATA) public data: OrderBoyAssign) {}

  order_id: number;
  fk_u_email_id: string;
  deliveryboy_id: string;
  order_amount: number;
  order_status: string;
  date: string;

  ngOnInit() {
    this.order_id=this.data.order_id;
    this.fk_u_email_id=this.data.fk_u_email_id;
    this.deliveryboy_id=this.data.deliveryboy_id;
    this.order_amount=this.data.order_amount;
    this.order_status=this.data.order_status;
    this.date=this.data.date;
  }

  onCancelClick() {
    this.dialogRef.close();
  }
}
