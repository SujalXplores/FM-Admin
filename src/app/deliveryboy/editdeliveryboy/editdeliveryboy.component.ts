import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DeliveryboydataService } from '../deliveryboydata.service';
import { deliveryboy } from '../deliveryboy';

@Component({
  selector: 'app-editdeliveryboy',
  templateUrl: './editdeliveryboy.component.html',
  styleUrls: ['./editdeliveryboy.component.css']
})
export class EditdeliveryboyComponent implements OnInit {

  constructor(private _act_route: ActivatedRoute, private _deliveryboydata: DeliveryboydataService, private _router: Router) { }
  d_id: number;
  d_name: string;
  d_address: string;
  d_mobileno: number;
  d_email: string;

  ngOnInit() {
    this.d_id = this._act_route.snapshot.params["deliveryboy_id"];
    this._deliveryboydata.editDeliveryboy(this.d_id).subscribe(
        (data: deliveryboy) => {
          this.d_id = data[0].deliveryboy_id;
          this.d_name = data[0].deliveryboy_name;
          this.d_address = data[0].deliveryboy_address;
          this.d_mobileno = data[0].deliveryboy_mobileno;
          this.d_email = data[0].deliveryboy_email;
        }
    );
  }

  onDeliveryboyEdit(f) {
    this._deliveryboydata.updateDeliveryboy(f.value).subscribe(
        (data: any) => {
          this._router.navigate(['/nav/deliveryboy']);
          console.log(f.value);
        }
    );
  }

}
