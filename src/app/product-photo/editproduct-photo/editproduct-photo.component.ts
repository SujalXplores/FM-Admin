import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductPhotodataService } from '../product-photodata.service';
import { product_photo } from '../product-photo';
import { product } from 'src/app/product/product';
import { ProductdataService } from 'src/app/product/productdata.service';
import { NotificationService } from 'src/app/notification.service';
@Component({
  selector: 'app-editproduct-photo',
  templateUrl: './editproduct-photo.component.html',
  styleUrls: ['./editproduct-photo.component.css']
})
export class EditproductPhotoComponent implements OnInit {
  constructor(private notificationService: NotificationService, public _activated_routes: ActivatedRoute, public _ser: ProductPhotodataService, public _router: Router, public _prodata: ProductdataService) { }

  pro_photo_id: number;
  photo_update: FormGroup;
  selectedFile: File = null;
  photoUrl: string = null;
  img_name: string = 'Upload Photo';
  list: product[] = [];

  ngOnInit() {
    this.pro_photo_id = this._activated_routes.snapshot.params['pro_photo_id'];
    this.photo_update = new FormGroup({
      pro_photo: new FormControl(null),
      fk_pro_id: new FormControl(null, [Validators.required])
    });
    this._ser.editProductPhoto(this.pro_photo_id).subscribe(
      (data: product_photo[]) => {
        this.formDataBind(data[0]);
      }
    );
    this._prodata.getAllProducts().subscribe(
      (data: any[]) => {
        this.list = data;
      }
    );
  }

  onChange(f) {
    this.selectedFile = <File>f.target.files[0];
    this.img_name = this.selectedFile.name;
  }

  formDataBind(item: product_photo) {
    this.photoUrl = "http://localhost:3000/images/product_photos/" + item.pro_photo;
    this.photo_update.patchValue({
      fk_pro_id: item.fk_pro_id,
      pro_photo: item.pro_photo
    });
  }

  onPhotoSubmit() {
    let fd = new FormData();
    if (this.selectedFile != null) {
      fd.append('image', this.selectedFile, this.selectedFile.name);
    }
    else {
      fd.append('image', null);
      fd.append('pro_photo', this.photo_update.get('pro_photo').value);
    }
    fd.append('fk_pro_id', this.photo_update.get('fk_pro_id').value);
    this._ser.updateProductPhoto(this.pro_photo_id, fd).subscribe(
      (data: product_photo) => {
        this._router.navigate(['/nav/product_photo']);
        this.notificationService.info('Changes has been saved.');
      }
    );
  }
}