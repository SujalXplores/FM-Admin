import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersdataService } from '../usersdata.service';
import { FormGroup, FormControl } from '@angular/forms';
import { users } from '../users';
import { NotificationService } from 'src/app/notification.service';
@Component({
  selector: 'app-edituserimage',
  templateUrl: './edituserimage.component.html',
  styleUrls: ['./edituserimage.component.css']
})
export class EdituserimageComponent implements OnInit {
  constructor(private notificationService: NotificationService, private _actrou: ActivatedRoute, private _userser: UsersdataService) { }

  u_email_id: string;
  updateuserpic: FormGroup;
  userurl: string = null;
  selectedFile: File = null;
  img_text: string = "Select Image";

  ngOnInit(): void {
    this.u_email_id = this._actrou.snapshot.params["u_email_id"];
    this.updateuserpic = new FormGroup({
      u_image: new FormControl(null)
    });
    this._userser.editUser(this.u_email_id).subscribe(
      (data: users[]) => {
        this.formDataBind(data[0]);
      }
    );
  }

  formDataBind(item: users) {
    this.userurl = "http://localhost:3000/images/user_photos/" + item.u_image;
    this.updateuserpic.patchValue({
      u_image: item.u_image,
    });
  }

  onChange(f) {
    this.selectedFile = <File>f.target.files[0];
    this.img_text = this.selectedFile.name;
  }

  onuserimageupdate() {
    let fd = new FormData();
    if (this.selectedFile != null) {
      fd.append('u_image', this.selectedFile, this.selectedFile.name);
    }
    else {
      fd.append('u_image', this.updateuserpic.get('u_image').value);
    }
    this._userser.updateUserimage(this.u_email_id, fd).subscribe((data: users) => {
      this.notificationService.info('Profile Photo has been updated.');
      this._userser.onRefreshClick();
      this.ngOnInit();
    });
  }
}