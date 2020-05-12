import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { prescription } from './prescription';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {

  pre_arr: prescription[] = [];
  displayedColumns: string[] = ['pre_title', 'pre_doc', 'pre_date', 'pre_by' , 'fk_u_email_id' , 'status'];
  dataSource: MatTableDataSource<prescription>;

  selection = new SelectionModel<prescription>(true, []);

  constructor() { }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

  ngOnInit(): void {
  }

}
