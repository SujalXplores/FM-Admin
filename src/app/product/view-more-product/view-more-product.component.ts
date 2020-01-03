import { Component, OnInit, Inject } from '@angular/core';
import { product } from '../product';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-view-more-product',
  templateUrl: './view-more-product.component.html',
  styleUrls: ['./view-more-product.component.css']
})
export class ViewMoreProductComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ViewMoreProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: product) {}

    product_id: number;
    product_name: string;
    product_mfg: string;
    product_price: number;
    product_desc: string;

    ngOnInit() {
      this.product_id = this.data.pro_id;
      this.product_name = this.data.pro_name;
      this.product_mfg = this.data.pro_mfg;
      this.product_price = this.data.pro_price;
      this.product_desc = this.data.pro_desc;
    }

    onCancelClick() {
      this.dialogRef.close();
    }


}
