import { Component, OnInit, ViewChild } from '@angular/core';
import { product } from './product';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { ProductdataService } from './productdata.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ViewMoreProductComponent } from './view-more-product/view-more-product.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  animations: [],
})
export class ProductComponent implements OnInit {

  productarr: product[] = [];
  displayedColumns: string[] = ['select', 'pro_name', 'pro_price', 'details', 'delete', 'edit'];
  dataSource: MatTableDataSource<product>;

  selection = new SelectionModel<product>(true, []);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _data: ProductdataService, public router: Router, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  openDialog(row) {
    this.dialog.open(ViewMoreProductComponent, {
      data: row
    });
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
}
