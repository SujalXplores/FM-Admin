import { Component, OnInit , ViewChild} from '@angular/core';
import { deliveryboy } from './deliveryboy';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { DeliveryboydataService } from './deliveryboydata.service';
import { ValetMailComponent } from './valet-mail/valet-mail.component';
import { ViewMoreDeliveryboyComponent } from './view-more-deliveryboy/view-more-deliveryboy.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-deliveryboy',
  templateUrl: './deliveryboy.component.html',
  styleUrls: ['./deliveryboy.component.css'],
})
export class DeliveryboyComponent implements OnInit {
  deliveryboyarr: deliveryboy[] = [];
  displayedColumns: string[] = ['select', 'deliveryboy_name' , 'deliveryboy_address', 'action'];
  dataSource: MatTableDataSource<deliveryboy>;

  selection = new SelectionModel<deliveryboy>(true, []);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _snackBar: MatSnackBar,private _data: DeliveryboydataService, public _dialog: MatDialog, private _router: Router,public dialog: MatDialog) {
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

  OnDeliveryboyMail(row) {
    this._dialog.open(ValetMailComponent,{
      data:row
    });
  }

  openDialog(row) {
    this.dialog.open(ViewMoreDeliveryboyComponent, {
      data: row
    });
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
