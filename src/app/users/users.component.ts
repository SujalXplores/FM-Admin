import { Component, OnInit, ViewChild} from '@angular/core';
import { users } from './users';
import { UsersdataService } from './usersdata.service';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userarr: users[] = [];
  displayedColumns: string[] = ['delete', 'name', 'email', 'phone_no', 'category' , 'action'];
  dataSource: MatTableDataSource<users>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _data: UsersdataService, public _dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  onDelete(item: users) {
    if( confirm( "Are You Sure You Want To Delete ?" )) {
      this._data.deleteUsers(item.name).subscribe(
        (data: any) => {
          console.log(data);
          this.userarr.splice(this.userarr.indexOf(item), 1);
          this.dataSource.data = this.userarr;
        }
      );
    }
   }

  onEdit(row) {
    this._dialog.open(DialogboxComponent, {
      data: row
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit() {
    this._data.getAllUsers().subscribe(
      (data: users[]) => {
        this.userarr = data;
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }
}
