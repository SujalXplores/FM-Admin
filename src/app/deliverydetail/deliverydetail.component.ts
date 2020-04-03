import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { OrderBoyAssign } from './orderboyassign';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DeliverydetailsdataService } from './deliverydetailsdata.service';
import { ViewMoreComponent } from './view-more/view-more.component';

@Component({
  selector: 'app-deliverydetail',
  templateUrl: './deliverydetail.component.html',
  styleUrls: ['./deliverydetail.component.css']
})
export class DeliverydetailComponent implements OnInit {

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
    this._data.getAllAssignOrders().subscribe(
      (data: OrderBoyAssign[]) => {
        console.log(data);
        this.ordersArr = data;
        this.dataSource.data = this.ordersArr;
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
}
