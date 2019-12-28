import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersdataService } from '../usersdata.service';
import { users } from '../users';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  constructor(private _act_route: ActivatedRoute, private _userdata: UsersdataService, private _router: Router) { }

  user_email: string;
  user_name: string;
  user_phone: string;
  user_password: string;
  user_address:string;

  ngOnInit() {
    this.user_email = this._act_route.snapshot.params["email"];
    this._userdata.editUser(this.user_email).subscribe(
        (data: users) => {
          this.user_email = data[0].u_email_id;
          this.user_name = data[0].u_name;
          this.user_phone = data[0].u_mobileno;
          this.user_password = data[0].u_password;
          this.user_address = data[0].u_address;
        }
    );
  }

  OnHide() {
    this._router.navigate(['']);
  }

  OnUserEdit(f) {
    this._userdata.updateUser(f.value).subscribe(
        (data: any) => {
          this._router.navigate(['/nav/users']);
          console.log(f.value);
        }
    );
  }

}
