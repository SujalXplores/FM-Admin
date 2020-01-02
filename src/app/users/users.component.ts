import { Component, OnInit, ViewChild} from '@angular/core';
import { users } from './users';
import { UsersdataService } from './usersdata.service';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ViewmoreUserComponent } from './viewmore-user/viewmore-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class UsersComponent implements OnInit {
  userarr: users[] = [];
  expandedElement: ViewMore | null;
  displayedColumns: string[] = ['select', 'u_name', 'u_mobileno' ,'u_image',  'details', 'delete', 'edit'];
  dataSource: MatTableDataSource<users>;

  selection = new SelectionModel<users>(true, []);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _data: UsersdataService, public _dialog: MatDialog, private _router: Router) {
    this.dataSource = new MatTableDataSource();
  }

  onDelete(item: users) {
    if( confirm( "Are You Sure You Want To Delete ?" )) {
      this._data.deleteUsers(item.u_email_id).subscribe(
        (data: any) => {
          console.log(data);
          this.userarr.splice(this.userarr.indexOf(item), 1);
          this.dataSource.data = this.userarr;
        }
      );
    }
   }

OnUserEdit(item: users) {
  this._router.navigate(['/nav/edituser', item.u_email_id]);
}

OnViewMore(item) {
  this._dialog.open(ViewmoreUserComponent, {
    data: item
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

export interface ViewMore {
  u_password: string;
  u_address: string;
}
