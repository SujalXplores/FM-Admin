import { Component, OnInit } from '@angular/core';
import { cart } from '../cart';
import { CartdataService } from '../cartdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent implements OnInit {
  arrcart: cart[] = [];
  constructor(private _cartdata: CartdataService, private _router: Router) { }
  value = '';
  ngOnInit() {
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
