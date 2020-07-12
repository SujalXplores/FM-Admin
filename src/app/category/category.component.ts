import { Component, OnInit, ViewChild } from '@angular/core';
import { category } from './category';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { CategorydataService } from './categorydata.service';
import { NotificationService } from '../notification.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  constructor(private notificationService: NotificationService, private _data: CategorydataService, private router: Router) {
    this.dataSource = new MatTableDataSource();
  }

  cancleClicked: boolean = false;
  categoryarr: category[] = [];
  displayedColumns: string[] = ['c_id', 'c_name', 'delete', 'edit'];
  dataSource: MatTableDataSource<category>;
  selection = new SelectionModel<category>(true, []);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  OnCategoryEdit(item: category) {
    this.router.navigate(['/nav/editcategory', item.c_id]);
  }

  onDelete(item: category) {
    this._data.deleteCategory(item.c_id).subscribe(
      (data: any) => {
        this.categoryarr.splice(this.categoryarr.indexOf(item), 1);
        this.dataSource.data = this.categoryarr;
        this.notificationService.warn('Record has been deleted !');
      }
    );
  }

  ngOnInit() {
    this._data.getAllCategory().subscribe(
      (data: category[]) => {
        this.categoryarr = data;
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
