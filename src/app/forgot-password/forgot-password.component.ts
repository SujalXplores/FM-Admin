import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgotPasswordService } from './forgot-password.service';
import { NotificationService } from '../notification.service';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
constructor(private notificationService: NotificationService,private _router: Router, public _mail: ForgotPasswordService) { }
forgetPasswordForm : FormGroup;

  ngOnInit() {
    this.forgetPasswordForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.email])
    });
  }

  onForgetClick() {
      if (this.forgetPasswordForm.get('name').value != null) {
          let a = this.forgetPasswordForm.get('name').value;
          this._mail.getUserByEmail(a).subscribe((data) => {
          this._mail.passwordMail(a, "Reset Password", "\n\n\nYour password is  <b>" + data[0].u_password + 
          "</b>\nDon't share your credentials to anyone.\nWe recommend you to change your Password.",data[0].u_name).subscribe((data) => {
          this._router.navigate(['']);
          this.notificationService.info('Mail has been sent on you registered mail. Check inbox.');
        });
      });
    }
  }
}
