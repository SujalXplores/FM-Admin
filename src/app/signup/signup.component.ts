import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators} from '@angular/forms';
import { SignupdataService } from './signupdata.service';
import { users } from '../users/users';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  arrsignup: users[] = [];
  constructor(private _signupdata: SignupdataService, private _router: Router) { }
   value = '';
   hide: string = 'false';
  ngOnInit() {
    this.signupForm = new FormGroup({
      u_email_id: new FormControl(null, [Validators.required, Validators.email]),
      u_mobileno: new FormControl(null, [Validators.required]),
      u_password: new FormControl(null, [Validators.required]),
    });
  }

  onSignup() {
    this._signupdata.signup(this.signupForm.value).subscribe(
      (data: users[]) => {
        this.arrsignup.push(this.signupForm.value);
        this._router.navigate(['']);
      }
    );
   }

}
