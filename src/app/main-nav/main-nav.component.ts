import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subject } from 'rxjs';
import { map, shareReplay, takeUntil } from 'rxjs/operators';
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
  private unsubscribe = new Subject();
  u_email_id: string = '';
  u_name: string = '';
  u_image: string = '';
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches),
    shareReplay()
  );

  ngOnInit() {
    if (this._refresh.subsVar == undefined) {
      this._refresh.subsVar = this._refresh.invokeRefresh.pipe(takeUntil(this.unsubscribe)).subscribe(() => {
        this.ngOnInit();
      });
    }
    this.u_email_id = localStorage.getItem('u_email_id');
    this._user.getUserByEmail(this.u_email_id).pipe(takeUntil(this.unsubscribe)).subscribe((data) => {
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
    dialogRef.afterClosed().pipe(takeUntil(this.unsubscribe)).subscribe(dialogResult => {
      if (dialogResult == true) {
        localStorage.removeItem("u_email_id");
        this.router.navigate(['/']);
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}