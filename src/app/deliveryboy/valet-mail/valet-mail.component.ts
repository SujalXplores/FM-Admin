import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { deliveryboy } from '../deliveryboy';
import { SendMailService } from './send-mail.service';
import { maildata } from './valetMail';
import { NotificationService } from 'src/app/notification.service';
import { environment } from 'src/environments/environment.prod';
@Component({
  selector: 'app-valet-mail',
  templateUrl: './valet-mail.component.html',
  styleUrls: ['./valet-mail.component.css']
})
export class ValetMailComponent implements OnInit {
  constructor(private notificationService: NotificationService, public dialogref: MatDialogRef<ValetMailComponent>, private _mail: SendMailService, @Inject(MAT_DIALOG_DATA) public data: deliveryboy) { }

  mailVendorForm: FormGroup;
  deliveryboy_name: string;
  img: string;
  url: string = environment.db;

  ngOnInit(): void {
    this.mailVendorForm = new FormGroup({
      email_id: new FormControl(this.data.deliveryboy_email),
      subject: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required)
    });
    this.deliveryboy_name = this.data.deliveryboy_name;
    this.img = this.data.img;
  }

  onMailVendor(f) {
    this._mail.generatemail(f.value).subscribe(
      (data: maildata[]) => { }
    )
    this.dialogref.close();
    this.notificationService.info('Mail has been sent to ' + this.deliveryboy_name);
  }

  onClose() {
    this.dialogref.close();
  }
}
