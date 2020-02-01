import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { EmailService } from './email.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar, private email: EmailService, private _router: Router) { }
  forgetPasswordForm : FormGroup;
  ngOnInit() {
    this.forgetPasswordForm = new FormGroup({
      name: new FormControl('shahc9437@gmail.com', [Validators.required, Validators.email])
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
    console.log(this.forgetPasswordForm.value);
    this.email.emailSend(this.forgetPasswordForm.value).subscribe(
      (data)=>{
        this._router.navigate(['']);
        console.log(data);
      });
    }
}
