import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgotPasswordService } from './forgot-password.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  
  constructor(private _snackBar: MatSnackBar, private _router: Router, public _mail: ForgotPasswordService) { }
  forgetPasswordForm : FormGroup;

  ngOnInit() {
    this.forgetPasswordForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.email])
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message , action, {
      duration: 5000,
      verticalPosition: 'top', // 'top' | 'bottom'
      horizontalPosition: 'right', //'start' | 'center' | 'end' | 'left' | 'right'
      panelClass: ['warning']
    });
  }

  onForgetClick() {
      if (this.forgetPasswordForm.get('name').value != null) {
          let a = this.forgetPasswordForm.get('name').value;
          this._mail.getUserByEmail(a).subscribe((data) => {
          this._mail.passwordMail(a, "Reset Password","Hi! "+data[0].u_name+", Your password is "+data[0].u_password+" Don't share your credentials to anyone. We recommend you to reset your Password.").subscribe((data) => {
        });
      });
      this._router.navigate(['']);
    }
    else {
      alert("Please provide your Email first!");
    }
  }
}
