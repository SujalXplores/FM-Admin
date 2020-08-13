import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../productdata.service';
import { Router } from '@angular/router';
import { product } from '../product';
import { CategorydataService } from 'src/app/category/categorydata.service';
import { NotificationService } from 'src/app/notification.service';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  constructor(private notificationService: NotificationService, private _productdata: ProductdataService, private _router: Router, private _catdata: CategorydataService) { }

  arrproduct: product[] = [];
  catnamearr: product[] = [];
  fk_cat_id: number;
  value = '';

  ngOnInit() {
    this._catdata.getAllCategory().subscribe(
      (data: any[]) => {
        this.catnamearr = data;
      }
    );
  }

  OnProductAdd(f) {
    this._productdata.addProduct(f.value).subscribe(
      (data: any) => {
        this.arrproduct.push(f.value);
        this._router.navigate(['/nav/product']);
        this.notificationService.success('✔️ Your product added successfully !');
      }
    );
  }
}