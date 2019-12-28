import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartdataService } from '../cartdata.service';
import { cart } from '../cart';

@Component({
  selector: 'app-editcart',
  templateUrl: './editcart.component.html',
  styleUrls: ['./editcart.component.css']
})
export class EditcartComponent implements OnInit {

  constructor(private _act_route: ActivatedRoute, private _cartdata: CartdataService, private _router: Router) { }
  cart_id1: number;
  u_email_id1: string;
  pro_id1: number;
  cart_quantity1: number;
  ngOnInit() {
    this.cart_id1 = this._act_route.snapshot.params["cart_id"];
    this._cartdata.editCart(this.cart_id1).subscribe(
        (data: cart) => {
          this.cart_id1 = data[0].cart_id;
          this.u_email_id1 = data[0].u_email_id;
          this.pro_id1 = data[0].pro_id;
          this.cart_quantity1 = data[0].cart_quantity;
        }
    );
  }

  onCartEdit(f) {
    this._cartdata.updateCart(f.value).subscribe(
        (data: any) => {
          this._router.navigate(['/nav/cart']);
          console.log(f.value);
        }
    );
  }

}
