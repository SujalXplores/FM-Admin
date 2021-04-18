import { Component, OnInit, ViewChild } from '@angular/core';
import { tracking } from './tracking';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { TrackdataService } from './trackdata.service';
import { NotificationService } from '../notification.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogModel, CustomDialogComponent } from '../shared/custom-dialog/custom-dialog.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-trackingdisplay',
  templateUrl: './trackingdisplay.component.html',
  styleUrls: ['./trackingdisplay.component.css']
})
export class TrackingdisplayComponent implements OnInit {
  constructor(
    private notificationService: NotificationService, 
    private _trackdata: TrackdataService, 
    public _router: Router,
    private dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource();
  }

  private unsubscribe = new Subject();
  cancleClicked: boolean = false;
  trackingarr: tracking[] = [];
  del_arr: number[] = [];
  displayedColumns: string[] = ['track_id', 'fk_detail_id', 'status', 'action'];
  dataSource: MatTableDataSource<tracking>;
  selection = new SelectionModel<tracking>(true, []);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit(): void {
    this._trackdata.getAllTrack().pipe(takeUntil(this.unsubscribe)).subscribe(
      (data: tracking[]) => {
        this.trackingarr = data;
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  onCheckBoxChange(row) {
    if (this.del_arr.find(x => x == row.track_id)) {
      this.del_arr.splice(this.del_arr.indexOf(row.track_id), 1);
    }
    else {
      this.del_arr.push(row.track_id);
    }
  }

  ontrackadd() {
    this._router.navigate(['/nav/addtrack']);
  }

  onDeleteAllClick() {
    this._trackdata.deleteAll(this.del_arr).pipe(takeUntil(this.unsubscribe)).subscribe(
      (data) => {
        for (let i = 0; i < this.del_arr.length; i++) {
          let x = this.trackingarr.find(x => x.track_id == this.del_arr[i]);
          this.trackingarr.splice(this.trackingarr.indexOf(x), 1);
          this.dataSource.data = this.trackingarr;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }
    );
  }

  onDelete(row) {
    this._trackdata.deleteTrack(row.track_id).pipe(takeUntil(this.unsubscribe)).subscribe(
      (data: any) => {
        this.trackingarr.splice(this.trackingarr.indexOf(row), 1);
        this.dataSource.data = this.trackingarr;
        this.notificationService.warn('Selected Records Deleted !');
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDeleteConfirm(item): void {
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

  openDeleteAllConfirm(): void {
    const message = `Are you sure you want to continue?`;
    const dialogData = new ConfirmDialogModel("Confirm Delete", message);
    const dialogRef = this.dialog.open(CustomDialogComponent, {
      width: "300px",
      autoFocus: false,
      data: dialogData
    });
    dialogRef.afterClosed().pipe(takeUntil(this.unsubscribe)).subscribe(dialogResult => {
      if (dialogResult == true) {
        this.onDeleteAllClick();
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}