import { Component, OnInit, ViewChild} from '@angular/core';
import { order } from './order';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { OrderdataService } from './orderdata.service';
import { OrderDialogComponent } from './order-dialog/order-dialog.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class OrderComponent implements OnInit {

  orderarr: order[] = [];
  expandedElement: ViewMore | null;
  displayedColumns: string[] = ['select', 'order_amount', 'order_date', 'details', 'delete', 'edit'];
  dataSource: MatTableDataSource<order>;

  selection = new SelectionModel<order>(true, []);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _data: OrderdataService, public router: Router , public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
   }

   openDialog(row) {
    this.dialog.open(OrderDialogComponent, {
      data: row
    });
  }

  onDelete(item: order) {
    if (confirm('Are You Sure You Want To Delete ?')) {
      this._data.deleteOrder(item.order_id).subscribe(
        (data: any) => {
          console.log(data);
          this.orderarr.splice(this.orderarr.indexOf(item), 1);
          this.dataSource.data = this.orderarr;
        }
      );
    }
  }

  OnOrderEdit(item: order) {
    this.router.navigate(['/nav/editorder', item.order_id]);
  }

applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
  ngOnInit() {
    this._data.getAllOrder().subscribe(
      (data: order[]) => {
        this.orderarr = data;
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

   // onUserEdit(item: product) {
  //   this.router.navigate(['editUser', item.email]);
  // }
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

export interface ViewMore {
  u_email_id: string;
  order_date: Date;
  order_status: string;
  deliveryboy_id: number;
}

