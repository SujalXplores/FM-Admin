import { Component, OnInit, ViewChild } from '@angular/core';
import { tracking } from './tracking';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { TrackdataService } from './trackdata.service';

@Component({
  selector: 'app-trackingdisplay',
  templateUrl: './trackingdisplay.component.html',
  styleUrls: ['./trackingdisplay.component.css']
})
export class TrackingdisplayComponent implements OnInit {

  trackingarr: tracking[] = [];
  displayedColumns: string[] = ['track_id' , 'status', 'fk_detail_id', 'action'];
  dataSource: MatTableDataSource<tracking>;

  selection = new SelectionModel<tracking>(true, []);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _trackdata: TrackdataService , public _router: Router) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this._trackdata.getAllTrack().subscribe(
      (data: tracking[]) => {
        console.log(data[0])
        this.trackingarr = data;
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  del_arr: number[] = [];

  onCheckBoxChange(row) {
    if (this.del_arr.find(x => x == row.track_id)) {
      this.del_arr.splice(this.del_arr.indexOf(row.track_id), 1);
    }
    else {
      this.del_arr.push(row.track_id);
    }
  }

  ontrackadd() {
    console.log("done");
    this._router.navigate(['/nav/addtrack']);
  }

  onDeleteAllClick() {
    this._trackdata.deleteAll(this.del_arr).subscribe(
      (data) => {
        console.log(data);
        for (let i = 0; i < this.del_arr.length; i++) {
          let x = this.trackingarr.find(x => x.track_id == this.del_arr[i]);
          this.trackingarr.splice(this.trackingarr.indexOf(x), 1);
          this.dataSource.data = this.trackingarr;
          console.log(this.dataSource.data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }
    );
  }

  OnTrackingEdit(track_id){
    console.log(track_id);
    this._router.navigate(['/nav/edittrack',track_id]);
  }

  onDelete(row){
    if (confirm("Are you sure you want to delete?")) {
      this._trackdata.deleteTrack(row.track_id).subscribe(
        (data: any) => {
          this.trackingarr.splice(this.trackingarr.indexOf(row), 1);
          this.dataSource.data = this.trackingarr;
        }
      );
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
