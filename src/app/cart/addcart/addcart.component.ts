import { Component, OnInit } from '@angular/core';
import { cart } from '../cart';
import { CartdataService } from '../cartdata.service';
import { Router } from '@angular/router';
import { product } from 'src/app/product/product';
import { ProductdataService } from 'src/app/product/productdata.service';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent implements OnInit {
  arrcart: cart[] = [];
  pronamearr: product[] = [];

  fk_pro_id: number;

  constructor(private _cartdata: CartdataService, private _router: Router , _prodata: ProductdataService) { }
  value = '';
  ngOnInit() {
    this._cartdata.getAllCart().subscribe(
      (data: any[]) => {
        this.pronamearr = data;
        console.log(this.pronamearr);
      }
    );
  }
  onCartAdd(f) {
    this._cartdata.addCart(f.value).subscribe(
      (data: any) => {
        this.arrcart.push(f.value);
        this._router.navigate(['/nav/cart']);
      }
    );
  }

}
