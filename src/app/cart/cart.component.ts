import { Component, OnInit , ViewChild} from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SelectionModel } from '@angular/cdk/collections';
import { cart } from './cart';
import { Router } from '@angular/router';
import { CartdataService } from './cartdata.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CartComponent implements OnInit {
  cartarr: cart[] = [];
  expandedElement: ViewMore | null;
  displayedColumns: string[] = ['select', 'u_email_id' , 'pro_id' , 'qty' , 'delete', 'edit'];
  dataSource: MatTableDataSource<cart>;

  selection = new SelectionModel<cart>(true, []);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private _data: CartdataService, public _dialog: MatDialog, private _router: Router) {
    this.dataSource = new MatTableDataSource();
  }

  onDelete(item: cart) {
    if( confirm( "Are You Sure You Want To Delete ?" )) {
      this._data.deleteCart(item.cart_id).subscribe(
        (data: any) => {
          console.log(data);
          this.cartarr.splice(this.cartarr.indexOf(item), 1);
          this.dataSource.data = this.cartarr;
        }
      );
    }
   }

   OnCartEdit(item: cart) {
    this._router.navigate(['/nav/editcart', item.cart_id]);
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
    this._data.getAllCart().subscribe(
      (data: cart[]) => {
        this.cartarr = data;
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

}
export interface ViewMore {
  u_email_id: string;
  pro_id: number ;
}
