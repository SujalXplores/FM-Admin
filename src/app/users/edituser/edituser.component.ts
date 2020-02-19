import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersdataService } from '../usersdata.service';
import { users } from '../users';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {


  u_email_id: string;
  user_update: FormGroup;
  selectedFile: File = null;
  image_url: string = null;

  constructor(private _act_route: ActivatedRoute, private _userdata: UsersdataService, private _router: Router) { }

  ngOnInit() {
      this.u_email_id = this._act_route.snapshot.params['u_email_id'];
      console.log(this.u_email_id);
      this.user_update = new FormGroup({
        u_name: new FormControl(null , [Validators.required , Validators.pattern('[a-z A-Z]*')]),
        u_mobileno: new FormControl(null  , [Validators.required , Validators.minLength(10), Validators.pattern('[0-9]*')]),
        u_password: new FormControl(null , [Validators.required]),
        u_address: new FormControl(null , [Validators.required]),
        u_image: new FormControl(null, [Validators.required]),
        u_type : new FormControl(null, [Validators.required])
      });
      this._userdata.editUser(this.u_email_id).subscribe(
        (data: users[]) => {
          this.formDataBind(data [0]);
          console.log(data[0]);
        }
      );
  }

  onChange(f) {
    this.selectedFile = <File> f.target.files[0];
  }

  formDataBind(item: users) {
      this.image_url = "http://localhost:3000/images/user_photos/" + item.u_image;
      console.log(this.image_url);
      this.user_update.patchValue({
        u_name: item.u_name,
        u_mobileno: item.u_mobileno,
        u_password: item.u_password,
        u_type : item.u_type,
        u_address: item.u_address,
      });
  }

  OnUserEdit() {
    console.log(this.user_update.get('u_image').value);
    let fd = new FormData();
    if (this.selectedFile != null) {
      fd.append('image', this.selectedFile, this.selectedFile.name);
    } else {
      fd.append('image', this.user_update.get('u_image').value);
    }

    fd.append('u_name', this.user_update.get('u_name').value);
    fd.append('u_mobileno', this.user_update.get('u_mobileno').value);
    fd.append('u_password', this.user_update.get('u_password').value);
    fd.append('u_type', this.user_update.get('u_type').value);
    fd.append('u_address', this.user_update.get('u_address').value);

    this._userdata.updateUser(this.u_email_id, fd).subscribe(
      (data: users) => {
        this._router.navigate(['/nav/users']);
      }
    );
  }
}
