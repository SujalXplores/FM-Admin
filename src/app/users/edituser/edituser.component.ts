import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersdataService } from '../usersdata.service';
import { users } from '../users';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/notification.service';
import { GetUserService } from 'src/app/main-nav/get-user.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {


  u_email_id: string;
  u_image: string;
  user_update: FormGroup;
  hide: boolean = true;
  isShow: boolean = false;
  constructor(private _user: GetUserService,private notificationService: NotificationService, private _act_route: ActivatedRoute, private _userdata: UsersdataService, private _router: Router) { }

  OnUserEdit() {
    this._userdata.updateUser(this.u_email_id, this.user_update.value).subscribe(
      (data: users) => {
        console.log(data);
        this._router.navigate(['/nav/users']);
      }
    );
    this.notificationService.success('Profile updated successfully !');
  }

  ngOnInit() {
    this.u_email_id = this._act_route.snapshot.params['u_email_id'];
    console.log(this.u_email_id);
    this.user_update = new FormGroup({
      u_email_id: new FormControl(null),
      u_name: new FormControl(null),
      u_mobileno: new FormControl(null),
      u_password: new FormControl(null),
      u_address: new FormControl(null),
      u_type : new FormControl(),
    });
    this._userdata.editUser(this.u_email_id).subscribe(
      (data: users[]) => {
        this.formDataBind(data[0]);
        console.log(data[0]);
      }
    );

    this._user.getUserByEmail(this.u_email_id).subscribe((data) => {
      this.u_image = data[0].u_image;
    });
  }

  formDataBind(item: users) {
    console.log(item);
    this.user_update.patchValue({
      u_name: item.u_name,
      u_mobileno: item.u_mobileno,
      u_password: item.u_password,
      u_address: item.u_address,
    });
  }

  onImgClick(){
    this.isShow = true;
  }
}
