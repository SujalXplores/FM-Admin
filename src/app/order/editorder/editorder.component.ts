import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderdataService } from '../orderdata.service';
import { order } from '../order';

@Component({
  selector: 'app-editorder',
  templateUrl: './editorder.component.html',
  styleUrls: ['./editorder.component.css']
})
export class EditorderComponent implements OnInit {

  constructor(private _act_route: ActivatedRoute, private _orderdata: OrderdataService, private _router: Router) { }
  order_id1: string;
  pro_name1 : string;
  u_email_id1 : string;
  order_date1 : Date;
  order_quantity1: number;
  order_status1: string;
  deliveryboy_id1: number;
  ngOnInit() {
    this.order_id1 = this._act_route.snapshot.params["order_id"];
    this._orderdata.editOrder(this.order_id1).subscribe(
        (data: order) => {
          this.order_id1 = data[0].order_id;
          this.pro_name1 = data[0].pro_name;
          this.u_email_id1 = data[0].u_email_id;
          this.order_date1 = data[0].order_date;
          this.order_quantity1 = data[0].order_quantity;
          this.order_status1 = data[0].order_status;
          this.deliveryboy_id1 = data[0].deliveryboy_id;
        }
    );
  }

  OnOrderEdit(f) {
    this._orderdata.updateOrder(f.value).subscribe(
      (data: any) => {
        this._router.navigate(['/nav/order']);
        console.log(f.value);
      }
  );
  }

}
