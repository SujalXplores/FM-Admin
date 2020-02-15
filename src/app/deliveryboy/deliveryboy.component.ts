import { Component, OnInit , ViewChild} from '@angular/core';
import { deliveryboy } from './deliveryboy';

import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { SelectionModel } from '@angular/cdk/collections';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { DeliveryboydataService } from './deliveryboydata.service';
@Component({
  selector: 'app-deliveryboy',
  templateUrl: './deliveryboy.component.html',
  styleUrls: ['./deliveryboy.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DeliveryboyComponent implements OnInit {
  deliveryboyarr: deliveryboy[] = [];
  expandedElement: ViewMore | null;
  displayedColumns: string[] = ['select', 'deliveryboy_name' , 'deliveryboy_address', 'details', 'delete', 'edit'];
  dataSource: MatTableDataSource<deliveryboy>;

  selection = new SelectionModel<deliveryboy>(true, []);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private _data: DeliveryboydataService, public _dialog: MatDialog, private _router: Router) {
    this.dataSource = new MatTableDataSource();
   }

   onDelete(item: deliveryboy) {
    if( confirm( "Are You Sure You Want To Delete ?" )) {
      this._data.deleteDeliveryboy(item.deliveryboy_id).subscribe(
        (data: any) => {
          console.log(data);
          this.deliveryboyarr.splice(this.deliveryboyarr.indexOf(item), 1);
          this.dataSource.data = this.deliveryboyarr;
        }
      );
    }
   }

   OnDeliveryboyEdit(item: deliveryboy) {
    this._router.navigate(['/nav/editdeliveryboy', item.deliveryboy_id]);
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
    this._data.getAllDeliveryboy().subscribe(
      (data: deliveryboy[]) => {
        this.deliveryboyarr = data;
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

}
export interface ViewMore {
  deliveryboy_mobileno: number;
  deliveryboy_email: string ;
}
