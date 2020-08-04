import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgotPasswordService } from './forgot-password.service';
import { NotificationService } from '../notification.service';
import { MatStepper } from '@angular/material/stepper';
import { MAT_STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { user } from './forgot';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  providers: [{
    provide: MAT_STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
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
  changePasswordForm: FormGroup;
  otpForm: FormGroup;
  otp: number = 0;
  otpInput: number = 0;
  isLinear: boolean = true;
  arrsignup: user[] = [];
  password: string = '';
  u_password: string = '';
  email_input: string = '';

  constructor(private _formBuilder: FormBuilder, private notificationService: NotificationService, private _router: Router, public _mail: ForgotPasswordService) { }

  ngOnInit() {
    this.forgetPasswordForm = this._formBuilder.group({
      name: new FormControl(null, [Validators.required, Validators.email])
    });
    this.changePasswordForm = this._formBuilder.group({
      password_group: new FormGroup({
        new_password: new FormControl(null, [
          Validators.required,
          Validators.minLength(8)
        ]),
        confirm_password: new FormControl(null)
      },[this.passwordMatch.bind(this)])
    });
  }

  passwordMatch(c: AbstractControl): { [s: string]: boolean } {
    const pass = c.get('new_password').value;
    const cpass = c.get('confirm_password').value;
    if (pass != cpass) {
      return { 'not same': true };
    }
    return null;
  }

  onOtpChange(otp1) {
    this.otpInput = otp1;
  }

  onForgetClick() {
    this.otp = Math.floor(1000 + Math.random() * 9000);
    if (this.forgetPasswordForm.get('name').value != null) {
      this.email_input = this.forgetPasswordForm.get('name').value;
      this._mail.getUserByEmail(this.email_input).subscribe((data) => {
        this.password = data[0].u_password;
        this._mail.passwordMail(this.email_input, "OTP", "\n\n\nYour One Time Password is  <b>" + this.otp + "</b>\nDon't share your credentials to anyone.\nWe recommend you to change your Password.", data[0].u_name).subscribe((data) => {
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
      this.notificationService.warn("Invalid OTP, Please try again!")
    }
  }

  onResendOTP() {
    this.otp = Math.floor(1000 + Math.random() * 9000);
    if (this.forgetPasswordForm.get('name').value != null) {
      let a = this.forgetPasswordForm.get('name').value;
      this._mail.getUserByEmail(a).subscribe((data) => {
        // this.password = data[0].u_password;
        this._mail.passwordMail(a, "OTP", "\n\n\nYour One Time Password is  <b>" + this.otp + "</b>\nDon't share your credentials to anyone.\nWe recommend you to change your Password.", data[0].u_name).subscribe((data) => {
          this.notificationService.info('📧 Mail has been sent on you registered mail. Check inbox.');
        });
      });
    }
  }

  onChangePassword() {
    let passOBJ = {
      u_password: this.changePasswordForm.value.password_group.new_password.value
    }
    this._mail.changePassword(this.email_input, passOBJ).subscribe(
      (data: user[]) => {
        // this.arrsignup.push(passOBJ);
        this.notificationService.info('Password has been changed!');
        this._router.navigate(['']);
      }
    );
  }
}