import { Component, OnInit, Inject } from '@angular/core';
import { users } from '../users';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UsersdataService } from '../usersdata.service';

@Component({
  selector: 'app-viewmore-user',
  templateUrl: './viewmore-user.component.html',
  styleUrls: ['./viewmore-user.component.css']
})
export class ViewmoreUserComponent implements OnInit {

  constructor(private _data: UsersdataService, public dialogRef: MatDialogRef<ViewmoreUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: users, ) { }

  user_email: string;
  user_name: string;
  user_phone: string;
  user_password: string;
  user_address: string;
  ngOnInit() {
        this.user_email = this.data.u_email_id;
        this.user_name = this.data.u_name;
        this.user_phone = this.data.u_mobileno;
        this.user_password = this.data.u_password;
        this.user_address = this.data.u_address;
  }

  onCancelClick() {
    this.dialogRef.close();
  }

}
