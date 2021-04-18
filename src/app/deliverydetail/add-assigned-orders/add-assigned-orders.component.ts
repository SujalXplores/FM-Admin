import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { OrderBoyAssign } from '../orderboyassign';
import { deliverdetails } from '../deliverydetail';
import { DeliverydetailsdataService } from '../deliverydetailsdata.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/notification.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-add-assigned-orders',
  templateUrl: './add-assigned-orders.component.html',
  styleUrls: ['./add-assigned-orders.component.css']
})
export class AddAssignedOrdersComponent implements OnInit {
  constructor(private notificationService: NotificationService, private _orderAssign: DeliverydetailsdataService, private _router: Router) {
    this.dataSourceOrder = new MatTableDataSource();
    this.dataSourceDelivery = new MatTableDataSource();
  }
  private unsubscribe = new Subject();
  displayedColumnsOrder: string[] = ['check', 'order_id', 'fk_u_email_id'];
  selrectedOrderArr: number[] = [];
  dataSourceOrder: MatTableDataSource<OrderBoyAssign>
  displayedColumnsDelivery: string[] = ['check', 'deliveryboy_name'];
  SelectedDboyId: string;
  dataSourceDelivery: MatTableDataSource<deliverdetails>;

  ngOnInit(): void {
    this._orderAssign.getnotAssignedOrders().pipe(takeUntil(this.unsubscribe)).subscribe(
      (dataOrders: OrderBoyAssign[]) => {
        this.dataSourceOrder.data = dataOrders;
      }
    );
    this._orderAssign.getAllDboy().pipe(takeUntil(this.unsubscribe)).subscribe(
      (dataDelivery: deliverdetails[]) => {
        this.dataSourceDelivery.data = dataDelivery;
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
      this._orderAssign.addOrderAssigned(objOrderAssigned).pipe(takeUntil(this.unsubscribe)).subscribe((x: any) => {
        if (x.insertId > 0) {
          this.notificationService.info('Selected Order is assigned to ' + this.SelectedDboyId);
          let trackObject = {
            status: "packing",
            fk_detail_id: x.insertId,
          };
          this._orderAssign.addTrack(trackObject).pipe(takeUntil(this.unsubscribe)).subscribe((y: any) => { });
          this._router.navigate(['/nav/deliverdetails']);
        }
        else {
          this.notificationService.warn('Select order first, and assign it to Partner !');
        }
      });
    }
  }

  onCheckboxChangeOrder(item: OrderBoyAssign) {
    if (this.selrectedOrderArr.find(x => x == item.order_id)) {
      this.selrectedOrderArr.splice(this.selrectedOrderArr.indexOf(item.order_id), 1);
    }
    else {
      this.selrectedOrderArr.push(item.order_id);
    }
  }

  onBack() {
    this._router.navigate(['/nav/deliverdetails']);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}