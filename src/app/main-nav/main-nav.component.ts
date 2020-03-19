import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ExitDialogComponent } from './exit-dialog/exit-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { GetUserService } from './get-user.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  date = new Date();
  u_email_id:string='';
  u_name:string='';
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(private _user: GetUserService,private breakpointObserver: BreakpointObserver, public router: Router, public dialog: MatDialog) {}

  ngOnInit() {
    this.u_email_id = localStorage.getItem('u_email_id');

      this._user.getUserByEmail(this.u_email_id).subscribe((data) => {
      this.u_name = data[0].u_name;
  });
}

  openDialog() {
    this.dialog.open(ExitDialogComponent);
  }
}