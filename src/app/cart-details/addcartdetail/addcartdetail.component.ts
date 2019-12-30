import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators} from '@angular/forms';
import { CartDetailsdataService } from '../cart-detailsdata.service';
import { Router } from '@angular/router';
import { cart_details } from '../cart_details';

@Component({
  selector: 'app-addcartdetail',
  templateUrl: './addcartdetail.component.html',
  styleUrls: ['./addcartdetail.component.css']
})
export class AddcartdetailComponent implements OnInit {

  addcartdetailform: FormGroup;
  arrcartdetail: cart_details[] = [];
  constructor(private _addcartdetaildata: CartDetailsdataService, private _router: Router) { }

  ngOnInit() {
    this.addcartdetailform = new FormGroup({

      qty: new FormControl(null, [Validators.required]),
      total: new FormControl(null, [Validators.required]),
    });
  }

  onCartAdd() {
    let cartobj = {
      qty: this.addcartdetailform.value.qty,
      total: this.addcartdetailform.value.total,
  };
      this._addcartdetaildata.addCart(cartobj).subscribe(
      (data: AddcartdetailComponent[]) => {
        this.arrcartdetail.push(cartobj);
        this._router.navigate(['/nav/cart_details']);
      }
    );
   }

}
