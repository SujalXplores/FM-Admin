import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { deliveryboy } from '../deliveryboy';

@Component({
  selector: 'app-view-more-deliveryboy',
  templateUrl: './view-more-deliveryboy.component.html',
  styleUrls: ['./view-more-deliveryboy.component.css']
})
export class ViewMoreDeliveryboyComponent implements OnInit {

  constructor(
  public dialogRef: MatDialogRef<ViewMoreDeliveryboyComponent>,
  @Inject(MAT_DIALOG_DATA) public data: deliveryboy) {}

  delivery_img: string;
  delivery_email: string;
  delivery_name: string;
  delivery_mobileno: number;
  deliveryboy_address: string;

  ngOnInit() {
    this.delivery_img = this.data.img;
    this.delivery_email = this.data.deliveryboy_email;
    this.delivery_name = this.data.deliveryboy_name;
    this.delivery_mobileno = this.data.deliveryboy_mobileno;
    this.deliveryboy_address = this.data.deliveryboy_address;
  }
  onCancelClick() {
    this.dialogRef.close();
  }
}
