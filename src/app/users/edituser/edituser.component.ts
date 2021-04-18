import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersdataService } from '../usersdata.service';
import { users } from '../users';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/notification.service';
import { GetUserService } from 'src/app/main-nav/get-user.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  constructor(
    private _user: GetUserService,
    private notificationService: NotificationService,
    private _act_route: ActivatedRoute,
    private _userdata: UsersdataService,
    private _router: Router
  ) { }

  u_email_id: string;
  u_image: string;
  userurl: string = null;
  user_update: FormGroup;
  user_update_password: FormGroup;
  updateuserpic: FormGroup;
  img_text: string;
  selectedFile: File = null;
  hide: boolean = true;

  ngOnInit() {
    if (this._userdata.subsVar == undefined) {
      this._userdata.subsVar = this._userdata.invokeRefresh.subscribe(() => {
        this.ngOnInit();
      });
    }
    this.u_email_id = this._act_route.snapshot.params['u_email_id'];
    this.user_update = new FormGroup({
      u_name: new FormControl(null, [Validators.required]),
      u_mobileno: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      u_address: new FormControl(null, [Validators.required]),
    });
    this.user_update_password = new FormGroup({
      u_password: new FormControl(null, [Validators.required]),
      new_password: new FormControl(null, [Validators.required,Validators.minLength(8)]),
      confirm_password: new FormControl(null, [Validators.required])
    }, { validators: this.checkPasswords });
    this.updateuserpic = new FormGroup({
      u_image: new FormControl(null)
    });
    this._userdata.editUser(this.u_email_id).subscribe((data: users[]) => {
      this.formDataBind(data[0]);
    });
    this._user.getUserByEmail(this.u_email_id).subscribe((data) => {
      this.u_image = data[0].u_image;
    });
  }

  OnUserEdit() {
    this._userdata.updateUser(this.u_email_id, this.user_update.value).subscribe(() => {
      this._router.navigate(['/nav/users']);
      this.notificationService.info('Profile settings updated !');
      this._userdata.onRefreshClick();
    });
  }

  formDataBind(item: users) {
    this.userurl = environment.db + "images/user_photos/" + item.u_image;
    this.user_update.patchValue({
      u_name: item.u_name,
      u_mobileno: item.u_mobileno,
      u_address: item.u_address,
    });
    this.updateuserpic.patchValue({
      u_image: item.u_image,
    });
  }

  onChange(f) {
    this.selectedFile = <File>f.target.files[0];
    this.img_text = this.selectedFile.name;
  }

  on_userimage_update() {
    let fd = new FormData();
    if (this.selectedFile != null) {
      fd.append('u_image', this.selectedFile, this.selectedFile.name);
    }
    else {
      fd.append('u_image', this.updateuserpic.get('u_image').value);
    }
    this._userdata.updateUserimage(this.u_email_id, fd).subscribe((data: users) => {
      this.notificationService.info('Profile Photo has been updated.');
      this.ngOnInit();
    });
  }

  checkPasswords(group: FormGroup) {
    let newpass = group.controls.new_password.value;
    let confirmPass = group.controls.confirm_password.value;
    return newpass === confirmPass ? null : { notSame: true }
  }

  onPasswordChange() {
    this._userdata.update_password(this.u_email_id, this.user_update_password.value).subscribe((x: any[]) => {
      if(x) {
        this._router.navigate(['/nav/users']);
        this.notificationService.success('Password has been updated !');
      }
      else {
        this.notificationService.warn("You've entered wrong password!");
      }
    });
  }
}