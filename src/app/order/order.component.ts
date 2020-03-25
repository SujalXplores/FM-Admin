import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { order } from './order';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { OrderdataService } from './orderdata.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  displayedColumns: string[] = ['select', 'order_amount', 'order_date', 'action'];
  dataSource: MatTableDataSource<order>;

  selection = new SelectionModel<order>(true, []);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _snackBar: MatSnackBar,private _data: OrderdataService, public router: Router , public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
   }

   openDialog(order_id){
    // this._dialog.open(OrderviewmoreComponent,{
    //   data:row
    //});
    this.router.navigate(['/nav/ordermore', order_id]);
    console.log(order_id);
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

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message , action, {
      duration: 5000,
      verticalPosition: 'bottom', // 'top' | 'bottom'
      horizontalPosition: 'center', //'start' | 'center' | 'end' | 'left' | 'right'
      panelClass: ['warning']
    });
  }
}

export interface ViewMore {
  u_email_id: string;
  order_date: Date;
  order_status: string;
  deliveryboy_id: number;
}


