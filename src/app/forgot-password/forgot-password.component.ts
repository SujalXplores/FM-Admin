import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgotPasswordService } from './forgot-password.service';
import { NotificationService } from '../notification.service';
import { MatStepper } from '@angular/material/stepper';
import { error } from 'console';
import { isUndefined } from 'util';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  @ViewChild('stepper') private myStepper: MatStepper;
  @ViewChild('ngOtpInput') ngOtpInputRef:any;
  config = {
    allowNumbersOnly: true,
    length: 4,
    isPasswordInput: true,
    disableAutoFocus: false,
    placeholder: '',
  };
  forgetPasswordForm: FormGroup;
  otp: number = 0;
  otpInput: number = 0;
  isLinear: boolean = true;
  otpForm: FormGroup;
  password: string = '';
  u_password: string = '';

  constructor(private _formBuilder: FormBuilder, private notificationService: NotificationService, private _router: Router, public _mail: ForgotPasswordService) { }

  ngOnInit() {
    this.forgetPasswordForm = this._formBuilder.group({
      name: new FormControl(null, [Validators.required, Validators.email])
    });
    this.otpForm = this._formBuilder.group({
      otp: new FormControl(null, [Validators.required, Validators.pattern('^\d{4}$')])
    });
  }

  onOtpChange(otp1) {
    this.otpInput = otp1;
  }

  onForgetClick() {
    this.otp = Math.floor(1000 + Math.random() * 9000);
    if (this.forgetPasswordForm.get('name').value != null) {
      let a = this.forgetPasswordForm.get('name').value;
      this._mail.getUserByEmail(a).subscribe((data) => {
        this.password = data[0].u_password;
        this._mail.passwordMail(a, "OTP", "\n\n\nYour One Time Password is  <b>" + this.otp + "</b>\nDon't share your credentials to anyone.\nWe recommend you to change your Password.", data[0].u_name).subscribe((data) => {
          this.notificationService.info('📧 Mail has been sent on you registered mail. Check inbox.');
          this.myStepper.next();
        });
      });
    }
  }

  onVerify() {
    if (this.otpInput == this.otp) {
      this.myStepper.next();
    }
    else {
      this.notificationService.warn('❌ Invalid OTP, Please try again!')
    }
  }
}