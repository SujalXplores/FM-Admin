import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators} from '@angular/forms';
import { LogindataService } from './logindata.service';
import { users } from '../users/users';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login-display',
  templateUrl: './login-display.component.html',
  styleUrls: ['./login-display.component.css']
})
export class LoginDisplayComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private _router:Router, private _logindata: LogindataService,private _snackBar: MatSnackBar) { }

  hide: string = 'false';
  ngOnInit() {
      this.loginForm = new FormGroup({
        u_email_id: new FormControl("sujalshah@gmail.com", [Validators.required, Validators.email]),
        u_password: new FormControl(1234, [Validators.required]),
      });
  }
  
  onLogin() {
       this._logindata.login(this.loginForm.value).subscribe(
         (x: users[]) => {
           if (x.length == 1){
                localStorage.setItem('u_email_id', this.loginForm.get('u_email_id').value);
                this._router.navigate(['/nav/']);
           }
           else {
             alert("invalid");
           }
         }
       );
      }
    }
