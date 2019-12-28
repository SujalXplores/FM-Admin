import { Component, OnInit } from '@angular/core';
import { OrderdataService } from '../orderdata.service';
import { Router } from '@angular/router';
import { order } from '../order';

@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddorderComponent implements OnInit {

  arrorder: order[] = [] ;
  constructor(private _orderdata: OrderdataService , private _router: Router) { }
  value = '';
  ngOnInit() {
  }

  OnOrderAdd(f){
    this._orderdata.addOrder(f.value).subscribe(
      (data: any) => {
        this.arrorder.push(f.value);
        this._router.navigate(['/nav/order']);
      }
    );
  }

}
