import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { OrderBoyAssign } from './orderboyassign';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DeliverydetailsdataService } from './deliverydetailsdata.service';
import { ViewMoreComponent } from './view-more/view-more.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-deliverydetail',
  templateUrl: './deliverydetail.component.html',
  styleUrls: ['./deliverydetail.component.css']
})
export class DeliverydetailComponent implements OnInit {
  private unsubscribe = new Subject();
  displayedColumns: string[] = ['deliveryboy_name', 'deliveryboy_id', 'date', 'actions'];
  dataSource: MatTableDataSource<OrderBoyAssign>;
  ordersArr: OrderBoyAssign[] = [];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(public dialog: MatDialog, private _data: DeliverydetailsdataService, public _routes: Router, public _dailog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this._data.getAllAssignOrders().pipe(takeUntil(this.unsubscribe)).subscribe(
      (data: OrderBoyAssign[]) => {
        this.ordersArr = data;
        this.dataSource.data = this.ordersArr;
        this.dataSource.sort = this.sort;
      }
    )
  }

  applyFilter(filtervalue: string) {
    this.dataSource.filter = filtervalue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onAddClick() {
    this._routes.navigate(['/nav/addassignedorders']);
  }

  openDialog(row) {
    this.dialog.open(ViewMoreComponent, {
      data: row
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
