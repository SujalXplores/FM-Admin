import { Component, OnInit, ViewChild } from '@angular/core';
import { product } from '../product';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ProductdataService } from '../productdata.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pdf-table',
  templateUrl: './pdf-table.component.html',
  styleUrls: ['./pdf-table.component.css']
})
export class PdfTableComponent implements OnInit {
  constructor(private _data: ProductdataService, public router: Router) {
    this.dataSource = new MatTableDataSource();
  }

  cancleClicked: boolean = false;
  productarr: product[] = [];
  del_arr: number[] = [];
  displayedColumns: string[] = ['pro_id', 'pro_name', 'c_name' , 'pro_mfg', 'pro_price'];
  dataSource: MatTableDataSource<product>;
  selection = new SelectionModel<product>(true, []);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

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
}