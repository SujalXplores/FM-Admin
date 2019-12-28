import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeliveryboydataService } from '../deliveryboydata.service';
import { deliveryboy } from '../deliveryboy';

@Component({
  selector: 'app-adddeliveryboy',
  templateUrl: './adddeliveryboy.component.html',
  styleUrls: ['./adddeliveryboy.component.css']
})
export class AdddeliveryboyComponent implements OnInit {
  arrDeliveryboy: deliveryboy[] = [];
  constructor(private _deliveryboydata: DeliveryboydataService, private _router: Router) { }
  value = '';
  ngOnInit() {
  }

  onDeliveryboyAdd(f) {
    this._deliveryboydata.addDeliveryboy(f.value).subscribe(
      (data: any) => {
        this.arrDeliveryboy.push(f.value);
        this._router.navigate(['/nav/deliveryboy']);
      }
    );
  }

}
