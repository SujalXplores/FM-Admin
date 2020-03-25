import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { OrderBoyAssign } from '../orderboyassign';
import { deliverdetails } from '../deliverydetail';
import { DeliverydetailsdataService } from '../deliverydetailsdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-assigned-orders',
  templateUrl: './add-assigned-orders.component.html',
  styleUrls: ['./add-assigned-orders.component.css']
})
export class AddAssignedOrdersComponent implements OnInit {

  displayedColumnsOrder: string[] = ['check', 'order_id', 'fk_u_email_id'];
  selrectedOrderArr: number[] = [];
  dataSourceOrder: MatTableDataSource<OrderBoyAssign>

  displayedColumnsDelivery: string[] = ['check', 'deliveryboy_name'];
  SelectedDboyId: string;
  dataSourceDelivery: MatTableDataSource<deliverdetails>;

  constructor(private _orderAssign: DeliverydetailsdataService, private _router: Router) {
    this.dataSourceOrder = new MatTableDataSource();
    this.dataSourceDelivery = new MatTableDataSource();
  }

  ngOnInit(): void {
    this._orderAssign.getnotAssignedOrders().subscribe(
      (dataOrders: OrderBoyAssign[]) => {
        this.dataSourceOrder.data = dataOrders;
        console.log(this.dataSourceOrder.data)
      }
    );
    this._orderAssign.getAllDboy().subscribe(
      (dataDelivery: deliverdetails[]) => {
        this.dataSourceDelivery.data = dataDelivery;
        console.log(this.dataSourceDelivery.data);
      }
    );
  }

  onRadioBtnChangeDelivery(item: string) {
    this.SelectedDboyId = item;
  }

   onSubmit() {
    if (this.dataSourceOrder.data.length > 0) {
      let objOrderAssigned = {
        'selectedOrderArr': this.selrectedOrderArr,
        'selectedDBoyId': this.SelectedDboyId
      };
      this._orderAssign.addOrderAssigned(objOrderAssigned).subscribe(
        (x: any) => {
          if (x.insertId > 0) {
            alert('Successfully Assgined');
          }
        });
      }
    this._router.navigate(['/nav/deliverdetails']);
  }

  onCheckboxChangeOrder(item: OrderBoyAssign) {
    if (this.selrectedOrderArr.find(x => x == item.order_id)) {
      this.selrectedOrderArr.splice(this.selrectedOrderArr.indexOf(item.order_id), 1);
    } else {
      this.selrectedOrderArr.push(item.order_id);
    }
  }
}
