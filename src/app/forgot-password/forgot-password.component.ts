import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgotPasswordService } from './forgot-password.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  
  constructor(private toaster: ToastrService, private _router: Router, public _mail: ForgotPasswordService) { }
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
          this._mail.passwordMail(a, "Reset Password", "Hi! " + data[0].u_name + 
          ",\n\n\nYour password is " + data[0].u_password + 
          "\nDon't share your credentials to anyone.\nWe recommend you to change your Password." + 
          "\n\n\n\n\n\n\n\n\n\nThank you,\nTeam FutureMediSurgico.").subscribe((data) => {
        });
      });
      this._router.navigate(['']);
      this.toaster.info('Check your inbox.','Password has been sent.');
    }
    else {
      alert("Please provide your Email first!");
    }
  }
}
