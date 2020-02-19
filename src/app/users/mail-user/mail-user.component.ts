import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { users } from '../users';
import { SendMailService } from 'src/app/deliveryboy/valet-mail/send-mail.service';
import { maildata } from 'src/app/deliveryboy/valet-mail/valetMail';

@Component({
  selector: 'app-mail-user',
  templateUrl: './mail-user.component.html',
  styleUrls: ['./mail-user.component.css']
})
export class MailUserComponent implements OnInit {

  mailUserForm:FormGroup;
  constructor(public dialogref:MatDialogRef<MailUserComponent>,private _mail: SendMailService,
  @Inject(MAT_DIALOG_DATA)public data: users) { }

  ngOnInit():void {
  console.log(this.data);
  this.mailUserForm=new FormGroup({
    email_id:new FormControl(this.data.u_email_id),
    subject:new FormControl(null,Validators.required),
    message:new FormControl(null,Validators.required)
  });
}

onMailUser(f){
  this._mail.generatemail(f.value).subscribe(
    (data: maildata[])=>{
    }
  )
  this.dialogref.close();
}
onClose() {
  this.dialogref.close();
  }

}
