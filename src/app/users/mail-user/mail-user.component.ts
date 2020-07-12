import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { users } from '../users';
import { SendMailService } from 'src/app/deliveryboy/valet-mail/send-mail.service';
import { maildata } from 'src/app/deliveryboy/valet-mail/valetMail';
import { NotificationService } from 'src/app/notification.service';
@Component({
  selector: 'app-mail-user',
  templateUrl: './mail-user.component.html',
  styleUrls: ['./mail-user.component.css']
})
export class MailUserComponent implements OnInit {
  constructor(private notificationService: NotificationService, public dialogref: MatDialogRef<MailUserComponent>, private _mail: SendMailService, @Inject(MAT_DIALOG_DATA) public data: users) { }

  mailUserForm: FormGroup;
  u_name: string;
  u_type: string;
  u_image: string;

  ngOnInit(): void {
    this.mailUserForm = new FormGroup({
      email_id: new FormControl(this.data.u_email_id),
      subject: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required)
    });
    this.u_name = this.data.u_name;
    this.u_type = this.data.u_type;
    this.u_image = this.data.u_image;
  }

  onMailUser(f) {
    this._mail.generatemail(f.value).subscribe(
      (data: maildata[]) => { }
    )
    this.dialogref.close();
    this.notificationService.info('Mail has been sent to ' + this.u_name);
  }

  onClose() {
    this.dialogref.close();
  }
}