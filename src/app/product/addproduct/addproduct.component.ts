import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../productdata.service';
import { Router } from '@angular/router';
import { product } from '../product';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  arrproduct: product[] = [] ;
  constructor(private _productdata: ProductdataService , private _router: Router ) { }
  value = '';
  ngOnInit() {
  }

  OnProductAdd(f) {
    this._productdata.addProduct(f.value).subscribe(
      (data: any) => {
        this.arrproduct.push(f.value);
        this._router.navigate(['/nav/product']);
      }
    );
  }

}
