import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { GetUserService } from './get-user.service';
import { ConfirmDialogModel, CustomDialogComponent } from '../shared/custom-dialog/custom-dialog.component';
import { UsersdataService } from '../users/usersdata.service';
@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  constructor(
    private _user: GetUserService,
    private breakpointObserver: BreakpointObserver,
    public router: Router,
    public dialog: MatDialog,
    private _refresh: UsersdataService
  ) { }
  hide: boolean = true;
  date = new Date();

  u_email_id: string = '';
  u_name: string = '';
  u_image: string = '';
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches),
    shareReplay()
  );

  ngOnInit() {
    if (this._refresh.subsVar == undefined) {
      this._refresh.subsVar = this._refresh.invokeRefresh.subscribe(() => {
        this.ngOnInit();
      });
    }
    this.u_email_id = localStorage.getItem('u_email_id');
    this._user.getUserByEmail(this.u_email_id).subscribe((data) => {
      if (data[0]) {
        this.u_name = data[0].u_name;
      }
    });
  }

  OnUserEdit() {
    this.router.navigate(['/nav/edituser', this.u_email_id]);
  }

  confirmDialog(): void {
    const message = `Are you sure you want to continue?`;
    const dialogData = new ConfirmDialogModel("Confirm Exit", message);
    const dialogRef = this.dialog.open(CustomDialogComponent, {
      width: "300px",
      autoFocus: false,
      data: dialogData
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult == true) {
        localStorage.removeItem("u_email_id");
        this.router.navigate(['/']);
      }
    });
  }
}