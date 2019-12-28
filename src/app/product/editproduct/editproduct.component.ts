import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../productdata.service';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from '../product';


@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  constructor(private _act_route: ActivatedRoute, private _productdata: ProductdataService, private _router: Router) { }
  pro_id1: number;
  pro_name1 : string;
  pro_mfg1 : string;
  pro_price1 : number;
  pro_desc1: string;
  ngOnInit() {
    this.pro_id1 = this._act_route.snapshot.params["pro_id"];
    this._productdata.editProduct(this.pro_id1).subscribe(
        (data: product) => {
          this.pro_name1 = data[0].pro_name;
          this.pro_mfg1 = data[0].pro_mfg;
          this.pro_price1 = data[0].pro_price;
          this.pro_desc1 = data[0].pro_desc;
        }
    );
  }

  OnProductEdit(f) {
    this._productdata.updateProduct(f.value).subscribe(
      (data: any) => {
        this._router.navigate(['/nav/product']);
        console.log(f.value);
      }
  );
  }
}
