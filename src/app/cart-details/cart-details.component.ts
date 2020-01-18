import { Component, OnInit , ViewChild} from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SelectionModel } from '@angular/cdk/collections';
import { cart_details } from './cart_details';
import { Router } from '@angular/router';
import { CartDetailsdataService } from './cart-detailsdata.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CartDetailsComponent implements OnInit {
  cart_detailsarr: cart_details[] = [];
  expandedElement: ViewMore | null;
  displayedColumns: string[] = ['select', 'cart_id', 'pro_id' , 'details' , 'delete', 'edit'];
  dataSource: MatTableDataSource<cart_details>;

  selection = new SelectionModel<cart_details>(true, []);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _data: CartDetailsdataService, public _dialog: MatDialog, private _router: Router) {
    this.dataSource = new MatTableDataSource();
  }

  onDelete(item: cart_details) {
    if( confirm( "Are You Sure You Want To Delete ?" )) {
      this._data.deleteCart(item.cart_detail_id).subscribe(
        (data: any) => {
          console.log(data);
          this.cart_detailsarr.splice(this.cart_detailsarr.indexOf(item), 1);
          this.dataSource.data = this.cart_detailsarr;
        }
      );
    }
   }

   OnCartDetailsEdit(item: cart_details) {
    this._router.navigate(['/nav/editcartdetail', item.cart_detail_id]);
  }

   applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

   /** Selects all rows if they are not all selected; otherwise clear selection. */
   masterToggle() {
    this.isAllSelected() ?
    this.selection.clear() :
    this.dataSource.data.forEach(row => this.selection.select(row));
  }

  ngOnInit() {
    this._data.getAllCartDetail().subscribe(
      (data: cart_details[]) => {
        this.cart_detailsarr = data;
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

}
export interface ViewMore {
  qty: number;
  total: number ;
}
