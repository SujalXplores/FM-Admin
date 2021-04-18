import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../productdata.service';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from '../product';
import { CategorydataService } from 'src/app/category/categorydata.service';
import { NotificationService } from 'src/app/notification.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  constructor(private notificationService: NotificationService, private _catdata: CategorydataService, private _act_route: ActivatedRoute, private _productdata: ProductdataService, private _router: Router) { }
  private unsubscribe = new Subject();
  pro_id1: number;
  pro_name1: string;
  pro_category1: string;
  pro_mfg1: string;
  pro_price1: string;
  pro_desc1: string;
  catnamearr: product[] = [];
  fk_cat_id: number;

  ngOnInit() {
    this.pro_id1 = this._act_route.snapshot.params["pro_id"];
    this._productdata.editProduct(this.pro_id1).pipe(takeUntil(this.unsubscribe)).subscribe(
      (data: product) => {
        this.pro_name1 = data[0].pro_name;
        this.pro_category1 = data[0].fk_cat_id;
        this.pro_mfg1 = data[0].pro_mfg;
        this.pro_price1 = data[0].pro_price;
        this.pro_desc1 = data[0].pro_desc;
      }
    );
    this._catdata.getAllCategory().pipe(takeUntil(this.unsubscribe)).subscribe(
      (data: any[]) => {
        this.catnamearr = data;
      }
    );
  }

  OnProductEdit(f) {
    this._productdata.updateProduct(this.pro_id1, f.value).pipe(takeUntil(this.unsubscribe)).subscribe(
      (data: any) => {
        this._router.navigate(['/nav/product']);
        this.notificationService.info('Changes has been saved successfully.');
      }
    );
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}