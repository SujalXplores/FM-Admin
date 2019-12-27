import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators, AbstractControl} from '@angular/forms';
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
      u_name: new FormControl(null, [Validators.required , Validators.pattern('[a-zA-Z]*')]),
      u_mobileno: new FormControl(null, [Validators.required , Validators.minLength(10), Validators.pattern('[0-9]*')]),
      password_group: new FormGroup({
         u_password: new FormControl(null, [Validators.required]),
         u_confirm_password: new FormControl(null)
      }, [this.passwordMatch.bind(this)]),
    });
  }

  onSignup() {
    let userobj = {
        u_email_id: this.signupForm.value.u_email_id,
        u_name: this.signupForm.value.u_name,
        u_mobileno: this.signupForm.value.u_mobileno,
        u_password: this.signupForm.value.password_group.u_password
    };
    this._signupdata.signup(userobj).subscribe(
      (data: users[]) => {
        this.arrsignup.push(userobj);
        this._router.navigate(['']);
      }
    );
   }

   passwordMatch(c: AbstractControl): { [s: string]: boolean } {
     const pass = c.get('u_password').value;
     const cpass = c.get('u_confirm_password').value;
     if ( pass != cpass) {
        return { 'not same' : true};
     }
     return null;
   }

}
