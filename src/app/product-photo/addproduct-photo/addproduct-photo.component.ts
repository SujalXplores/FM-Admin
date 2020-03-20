import { Component, OnInit } from '@angular/core';
import { product_photo } from '../product-photo';
import { ProductPhotodataService } from '../product-photodata.service';
import { Router } from '@angular/router';
import { product } from 'src/app/product/product';
import { ProductdataService } from 'src/app/product/productdata.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-addproduct-photo',
  templateUrl: './addproduct-photo.component.html',
  styleUrls: ['./addproduct-photo.component.css']
})
export class AddproductPhotoComponent implements OnInit {

  arrProduct: product_photo[] = [];
  constructor(private _snackBar: MatSnackBar,private _productdata: ProductPhotodataService, private _router: Router, private _prodata: ProductdataService) { }
  selectedFile: File = null;
  value = '';

  productarr: product[] = [];

  ngOnInit() {
    this._prodata.getAllProducts().subscribe(
      (data: any[]) => {
        this.productarr = data;
        console.log(this.productarr);
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
      console.log(data);
    this._router.navigate(['/nav/product_photo']);

      }
    );
  }

onChange(f){
  this.selectedFile = <File>f.target.files[0];
}
openSnackBar(message: string, action: string) {
  this._snackBar.open(message , action, {
    duration: 5000,
    verticalPosition: 'bottom', // 'top' | 'bottom'
    horizontalPosition: 'center', //'start' | 'center' | 'end' | 'left' | 'right'
    panelClass: ['warning']
  });
}

}
