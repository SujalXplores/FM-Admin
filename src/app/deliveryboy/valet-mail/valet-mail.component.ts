import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { deliveryboy } from '../deliveryboy';
import { SendMailService } from './send-mail.service';
import { maildata } from './valetMail';

@Component({
  selector: 'app-valet-mail',
  templateUrl: './valet-mail.component.html',
  styleUrls: ['./valet-mail.component.css']
})
export class ValetMailComponent implements OnInit {

  mailVendorForm:FormGroup;
  constructor(public dialogref:MatDialogRef<ValetMailComponent>,private _mail: SendMailService,
    @Inject(MAT_DIALOG_DATA)public data: deliveryboy) { }

  ngOnInit():void {
  console.log(this.data);
  this.mailVendorForm=new FormGroup({
    email_id:new FormControl(this.data.deliveryboy_email),
    subject:new FormControl(null),
    message:new FormControl(null)
  });
  }

  onMailVendor(f){

    console.log(f.value);
    this._mail.generatemail(f.value).subscribe(
      (data: maildata[])=>{
        this.dialogref.close();
      }
    )
  }

}
