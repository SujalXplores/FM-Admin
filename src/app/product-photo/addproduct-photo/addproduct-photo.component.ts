import { Component, OnInit } from '@angular/core';
import { product_photo } from '../product-photo';
import { ProductPhotodataService } from '../product-photodata.service';
import { Router } from '@angular/router';
import { product } from 'src/app/product/product';
import { ProductdataService } from 'src/app/product/productdata.service';
import { NotificationService } from 'src/app/notification.service';
@Component({
  selector: 'app-addproduct-photo',
  templateUrl: './addproduct-photo.component.html',
  styleUrls: ['./addproduct-photo.component.css']
})
export class AddproductPhotoComponent implements OnInit {
  constructor(private notificationService: NotificationService, private _productdata: ProductPhotodataService, private _router: Router, private _prodata: ProductdataService) { }

  arrProduct: product_photo[] = [];
  selectedFile: File = null;
  value = '';
  img_name: string = 'Upload Photo';
  productarr: product[] = [];

  ngOnInit() {
    this._prodata.getAllProducts().subscribe(
      (data: any[]) => {
        this.productarr = data;
      }
    );
  }

  onProductPhotoAdd(f) {
    let fd = new FormData();
    fd.append('pro_photo_id', f.value.pro_photo_id);
    fd.append('fk_pro_id', f.value.fk_pro_id);
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this._productdata.addProductPhoto(fd).subscribe(
      (data: any[]) => {
        this._router.navigate(['/nav/product_photo']);
        this.notificationService.success('Photo has been added !');
      }
    );
  }

  onChange(f) {
    this.selectedFile = <File>f.target.files[0];
    this.img_name = this.selectedFile.name;
  }
}