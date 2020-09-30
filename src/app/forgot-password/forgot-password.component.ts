import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgotPasswordService } from './forgot-password.service';
import { NotificationService } from '../notification.service';
import { MatStepper } from '@angular/material/stepper';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }],
  encapsulation: ViewEncapsulation.None,
})
export class ForgotPasswordComponent implements OnInit {
  @ViewChild('stepper') private myStepper: MatStepper;
  @ViewChild('ngOtpInput') ngOtpInputRef: any;
  config = {
    allowNumbersOnly: true,
    length: 4,
    isPasswordInput: true,
    disableAutoFocus: false,
    placeholder: '',
  };

  forgetPasswordForm: FormGroup;
  changePasswordForm: FormGroup;
  otp: number = 0;
  otpInput: number = 0;
  isLinear: boolean = true;
  password: string = '';
  u_password: string = '';
  u_email_id: string = '';
  hide_svg1: boolean = true;
  hide_svg2: boolean = false;
  hide_svg3: boolean = false;
  hide: boolean = true;

  constructor(
    private notificationService: NotificationService,
    private _router: Router,
    public _mail: ForgotPasswordService,
    private _snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    this.forgetPasswordForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.email])
    });
    this.changePasswordForm = new FormGroup({
      u_password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirm_password: new FormControl(null)
    }, { validators: this.checkPasswords });
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.u_password.value;
    let confirmPass = group.controls.confirm_password.value;
    return pass === confirmPass ? null : { notSame: true }
  }

  onOtpChange(otp1) {
    this.otpInput = otp1;
  }

  onForgetClick() {
    this.otp = Math.floor(1000 + Math.random() * 9000);
    if (this.forgetPasswordForm.get('name').value != null) {
      this.u_email_id = this.forgetPasswordForm.get('name').value;
      this._mail.getUserByEmail(this.u_email_id).subscribe((data) => {
        if (data[0] && data[0].u_password) {
          this.password = data[0].u_password;
          this._mail.passwordMail(this.u_email_id, "Verification Code", "\n\n\nThe varification code is: <b>" + this.otp + " < /b>\nUse it to proceed further.\nIf you didn't request this code you can safely ignore it.").subscribe((data) => {
            this.notificationService.info('📧 OTP has been sent on ' + this.u_email_id + '. Check inbox.');
            this.hide_svg1 = false;
            this.hide_svg2 = true;
            this.myStepper.next();
          });
        }
        else {
          this.notificationService.warn("Email doesn't exist, Please try again !");
        }
      });
    }
  }

  onVerify() {
    if (this.otpInput == this.otp) {
      this.hide_svg2 = false;
      this.hide_svg3 = true;
      this.myStepper.next();
    }
    if (this.otpInput < 4 || this.otpInput != this.otp) {
      this.notificationService.warn("Invalid OTP, Please try again!");
    }
  }

  onResendOTP() {
    this.otp = Math.floor(1000 + Math.random() * 9000);
    if (this.forgetPasswordForm.get('name').value != null) {
      this._mail.getUserByEmail(this.u_email_id).subscribe(() => {
        this._mail.passwordMail(this.u_email_id, "Verification Code", "\n\n\nThe varification code is: " + this.otp + "\nUse it to proceed further.\nIf you didn't request this code you can safely ignore it.").subscribe(() => {
          this.notificationService.info('📧 OTP has been sent on ' + this.u_email_id + ', Check inbox.');
        });
      });
    }
  }

  onChangePassword() {
    let passOBJ = {
      u_email_id: this.u_email_id,
      new_password: this.changePasswordForm.value.u_password
    }
    this._mail.changePassword(passOBJ).subscribe(
      () => {
        this._router.navigate(['']);
        this.notificationService.success('✔️ Password has been changed!');
      }
    );
  }
}