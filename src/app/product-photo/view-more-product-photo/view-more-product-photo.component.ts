import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'src/environments/environment.prod';
import { product_photo } from '../product-photo';
@Component({
  selector: 'app-view-more-product-photo',
  templateUrl: './view-more-product-photo.component.html',
  styleUrls: ['./view-more-product-photo.component.css']
})
export class ViewMoreProductPhotoComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ViewMoreProductPhotoComponent>, @Inject(MAT_DIALOG_DATA) public data: product_photo) { }

  product_photo_id: number;
  fk_product_id: number;
  pro_photo: string;
  url: string = environment.db;

  ngOnInit() {
    this.product_photo_id = this.data.pro_photo_id;
    this.fk_product_id = this.data.fk_pro_id;
    this.pro_photo = this.data.pro_photo;
  }

  onCancelClick() {
    this.dialogRef.close();
  }
}