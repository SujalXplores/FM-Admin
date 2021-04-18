import { Component, OnInit, ViewChild } from '@angular/core';
import { deliveryboy } from './deliveryboy';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { DeliveryboydataService } from './deliveryboydata.service';
import { ValetMailComponent } from './valet-mail/valet-mail.component';
import { ViewMoreDeliveryboyComponent } from './view-more-deliveryboy/view-more-deliveryboy.component';
import { NotificationService } from '../notification.service';
import { AdddeliveryboyComponent } from './adddeliveryboy/adddeliveryboy.component';
import { ConfirmDialogModel, CustomDialogComponent } from '../shared/custom-dialog/custom-dialog.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-deliveryboy',
  templateUrl: './deliveryboy.component.html',
  styleUrls: ['./deliveryboy.component.css'],
})
export class DeliveryboyComponent implements OnInit {
  private unsubscribe = new Subject();
  cancleClicked: boolean = false;
  deliveryboyarr: deliveryboy[] = [];
  displayedColumns: string[] = ['deliveryboy_name', 'deliveryboy_mobileno', 'action'];
  dataSource: MatTableDataSource<deliveryboy>;
  selection = new SelectionModel<deliveryboy>(true, []);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private notificationService: NotificationService,
    private _data: DeliveryboydataService,
    private _dialog: MatDialog, 
    private dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource();
  }

  onDelete(item: deliveryboy) {
    this._data.deleteDeliveryboy(item.deliveryboy_id).pipe(takeUntil(this.unsubscribe)).subscribe(() => {
      this.deliveryboyarr.splice(this.deliveryboyarr.indexOf(item), 1);
      this.dataSource.data = this.deliveryboyarr;
      this.notificationService.warn('Record deleted successfully !');
    }, (error) => {
      this.notificationService.warn(error);
    });
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

  ngOnInit(): void {
    if (this._data.subsVar == undefined) {
      this._data.subsVar = this._data.invokeRefresh.pipe(takeUntil(this.unsubscribe)).subscribe(() => {
        this.ngOnInit();
      });
    }
    this._data.getAllDeliveryboy().pipe(takeUntil(this.unsubscribe)).subscribe(
      (data: deliveryboy[]) => {
        console.log(data);
        this.deliveryboyarr = data;
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  OnDeliveryboyMail(row) {
    this._dialog.open(ValetMailComponent, {
      data: row
    });
  }

  openViewMoreDialog(row) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = "auto";
    dialogConfig.width = "auto";
    dialogConfig.data = row;
    this.dialog.open(ViewMoreDeliveryboyComponent, dialogConfig);
  }

  openAddDialogue() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(AdddeliveryboyComponent, dialogConfig);
  }

  openDeleteConfirm(item: deliveryboy): void {
    const message = `Are you sure you want to continue?`;
    const dialogData = new ConfirmDialogModel("Confirm Delete", message);
    const dialogRef = this.dialog.open(CustomDialogComponent, {
      width: "300px",
      autoFocus: false,
      data: dialogData
    });
    dialogRef.afterClosed().pipe(takeUntil(this.unsubscribe)).subscribe(dialogResult => {
      if (dialogResult == true) {
        this.onDelete(item);
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}