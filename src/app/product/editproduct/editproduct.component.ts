import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../productdata.service';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from '../product';
import { CategorydataService } from 'src/app/category/categorydata.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar,private _catdata: CategorydataService, private _act_route: ActivatedRoute, private _productdata: ProductdataService, private _router: Router) { }
  pro_id1: number;
  pro_name1 : string;
  pro_category1 : string;
  pro_mfg1 : string;
  pro_price1 : string;
  pro_desc1: string;
  catnamearr: product[] = [];
  fk_cat_id: number;

  ngOnInit() {
    this.pro_id1 = this._act_route.snapshot.params["pro_id"];
    console.log(this.pro_id1);
    this._productdata.editProduct(this.pro_id1).subscribe(
        (data: product) => {
          this.pro_name1 = data[0].pro_name;
          this.pro_category1 = data[0].fk_cat_id;
          this.pro_mfg1 = data[0].pro_mfg;
          this.pro_price1 = data[0].pro_price;
          this.pro_desc1 = data[0].pro_desc;
        }
      );
    this._catdata.getAllCategory().subscribe(
      (data: any[]) => {
        this.catnamearr = data;
      }
    );
  }
  
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message , action, {
      duration: 5000,
      verticalPosition: 'bottom', // 'top' | 'bottom'
      horizontalPosition: 'center', //'start' | 'center' | 'end' | 'left' | 'right'
      panelClass: ['update']
    });
  }

  OnProductEdit(f) {
    this._productdata.updateProduct(this.pro_id1,f.value).subscribe(
      (data: any) => {
        this._router.navigate(['/nav/product']);
        console.log(f.value);
      }
    );
  }
}
