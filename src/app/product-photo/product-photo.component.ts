import { Component, OnInit, ViewChild } from '@angular/core';
import { product_photo } from './product-photo';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { ProductPhotodataService } from './product-photodata.service';
import { ViewMoreProductPhotoComponent } from './view-more-product-photo/view-more-product-photo.component';

@Component({
  selector: 'app-product-photo',
  templateUrl: './product-photo.component.html',
  styleUrls: ['./product-photo.component.css'],
  animations: [],
})
export class ProductPhotoComponent implements OnInit {

  productarr: product_photo[] = [];
  displayedColumns: string[] = ['select', 'fk_pro_id', 'details', 'delete', 'edit'];
  dataSource: MatTableDataSource<product_photo>;

  selection = new SelectionModel<product_photo>(true, []);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _data: ProductPhotodataService, public router: Router, public dialog: MatDialog) {
       this.dataSource = new MatTableDataSource();
   }

   openDialog(row) {
    this.dialog.open(ViewMoreProductPhotoComponent, {
      data: row
    });
  }

  onDelete(item: product_photo) {
    if (confirm('Are You Sure You Want To Delete ?')) {
      this._data.deleteProductPhoto(item.pro_photo_id).subscribe(
        (data: any) => {
          console.log(data);
          this.productarr.splice(this.productarr.indexOf(item), 1);
          this.dataSource.data = this.productarr;
        }
      );
    }
  }

  OnProductEdit(item: product_photo) {
    this.router.navigate(['/nav/editproduct_photo', item.pro_photo_id]);
  }

applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

  ngOnInit() {
    this._data.getAllProductPhoto().subscribe(
      (data: product_photo[]) => {
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

}
