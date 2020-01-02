import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartDetailsdataService } from '../cart-detailsdata.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { cart_details } from '../cart_details';

@Component({
  selector: 'app-editcartdetail',
  templateUrl: './editcartdetail.component.html',
  styleUrls: ['./editcartdetail.component.css']
})
export class EditcartdetailComponent implements OnInit {

  cart_detail_id: number;
  cartdeatil_update: FormGroup;

  constructor(public _activated_routes:ActivatedRoute , public _ser: CartDetailsdataService , public _route: Router) { }

  ngOnInit() {
    this.cart_detail_id = this._activated_routes.snapshot.params['cart_detail_id'];
    this.cartdeatil_update = new FormGroup({
      qty: new FormControl(null , [Validators.required]),
      total: new FormControl(null , [Validators.required])
    });

    this._ser.editCart(this.cart_detail_id).subscribe(
       (data: cart_details[]) => {
             this.formDataBind(data [0]);
       }
    );
  }
   formDataBind(item: cart_details) {
       this.cartdeatil_update.patchValue({
         qty: item.qty,
         total: item.total,
       });
   }

   onCartEdit() {
     this._ser.updateCart(this.cartdeatil_update.value).subscribe(
       (data: cart_details) => {
             this._route.navigate(['/nav/cart_details']);
       }
     );
   }
}
