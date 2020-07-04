import { Component, OnInit , ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel, DataSource } from '@angular/cdk/collections';
import { order_detail } from './order_detail';
import { Router } from '@angular/router';
import { OrderDetaildataService } from './order-detaildata.service';
import { OrderDetailviewmoreComponent } from './order-detailviewmore/order-detailviewmore.component';
import { NotificationService } from '../notification.service';
@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css'],
})
export class OrderDetailComponent implements OnInit {

  cancleClicked: boolean = false;
  orderdetailarr: order_detail[] = [];
  displayedColumns: string[] = ['select', 'pro_name' ,  'qty' ,  'action'];
  dataSource: MatTableDataSource<order_detail>;

  selection = new SelectionModel<order_detail>(true, []);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private notificationService: NotificationService, private _data: OrderDetaildataService, public router: Router, public dialog: MatDialog) {
    this.dataSource=new MatTableDataSource()
   }

  openDialog(row) {
    this.dialog.open(OrderDetailviewmoreComponent, {
      data: row
    });
  }

  onDelete(item: order_detail) {
    this._data.deleteOrderDetail(item.order_detail_id).subscribe(
      (data: any) => {
        console.log(data);
        this.orderdetailarr.splice(this.orderdetailarr.indexOf(item), 1);
        this.dataSource.data = this.orderdetailarr;
      }
    );
    this.notificationService.warn('Selected record deleted !');
  }

  OnOrderDetailEdit(item: order_detail) {
    this.router.navigate(['/nav/editorder', item.order_detail_id]);
  }

  applyFilter(filterValue: string){
      this.dataSource.filter = filterValue.trim().toLowerCase();
      if (this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
    this._data.getAllOrderDetail().subscribe(
      (data: order_detail[]) => {
        console.log(data);
        this.orderdetailarr = data;
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
    this.selection.clear() :
    this.dataSource.data.forEach(row => this.selection.select(row));
  }
}
