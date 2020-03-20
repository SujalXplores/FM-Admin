import { Component, OnInit, ViewChild } from '@angular/core';
import { product } from './product';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { ProductdataService } from './productdata.service';
import { ViewMoreProductComponent } from './view-more-product/view-more-product.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  animations: [],
})
export class ProductComponent implements OnInit {

  productarr: product[] = [];
  del_arr: number[] = [];
  displayedColumns: string[] = ['select', 'pro_name', 'c_name' ,  'pro_price', 'action'];
  dataSource: MatTableDataSource<product>;

  selection = new SelectionModel<product>(true, []);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _snackBar: MatSnackBar,private _data: ProductdataService, public router: Router, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  openDialog(row) {
    this.dialog.open(ViewMoreProductComponent, {
      data: row
    });
  }
  oncheckboxchange(row: product) {

    // tslint:disable-next-line: triple-equals
    if (this.del_arr.find(x => x == row.pro_id)) {
       this.del_arr.splice(this.del_arr.indexOf(row.pro_id), 1);
    } else {
      this.del_arr.push(row.pro_id);
    }

  }
  ondeleteallclick() {
    if (confirm('Are You Sure You Want To Delete ?')){
    this._data.deleteall(this.del_arr).subscribe(
      (data) => {
        for (let i=0;i<this.del_arr.length;i++) {
          let x = this.productarr.find(x => x.pro_id == this.del_arr[i]);
          this.productarr.splice(this.productarr.indexOf(x), 1);
          this.dataSource.data = this.productarr;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }
    );
  }
}


  onDelete(item: product) {
    if (confirm('Are You Sure You Want To Delete ?')) {
      this._data.deleteProduct(item.pro_id).subscribe(
        (data: any) => {
          console.log(data);
          this.productarr.splice(this.productarr.indexOf(item), 1);
          this.dataSource.data = this.productarr;
        }
      );
    }
  }

  OnProductEdit(item: product) {
    console.log(item.pro_id);
    this.router.navigate(['/nav/editproduct', item.pro_id]);
  }

applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

  ngOnInit() {
    this._data.getAllProducts().subscribe(
      (data: product[]) => {
        console.log(data);
        this.productarr = data;
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
