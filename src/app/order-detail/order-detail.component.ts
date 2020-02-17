import { Component, OnInit , ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { order_detail } from './order_detail';
import { Router } from '@angular/router';
import { OrderDetaildataService } from './order-detaildata.service';
@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class OrderDetailComponent implements OnInit {

  orderdetailarr: order_detail[] = [];
  displayedColumns: string[] = ['select', 'fk_order_id', 'pro_name' ,  'qty' , 'delete', 'edit'];
  dataSource: MatTableDataSource<order_detail>;

  selection = new SelectionModel<order_detail>(true, []);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _data: OrderDetaildataService, public router: Router) { }

  onDelete(item: order_detail) {
    if (confirm('Are You Sure You Want To Delete ?')) {
      this._data.deleteOrderDetail(item.order_detail_id).subscribe(
        (data: any) => {
          console.log(data);
          this.orderdetailarr.splice(this.orderdetailarr.indexOf(item), 1);
          this.dataSource.data = this.orderdetailarr;
        }
      );
    }
  }

  OnOrderDetailEdit(item: order_detail) {
    this.router.navigate(['/nav/editorder', item.order_detail_id]);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
  ngOnInit(): void {
    this._data.getAllOrderDetail().subscribe(
      (data: order_detail[]) => {
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
