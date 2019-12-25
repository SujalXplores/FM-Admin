import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators} from '@angular/forms';
import { LogindataService } from './logindata.service';
import { users } from '../users/users';

@Component({
  selector: 'app-login-display',
  templateUrl: './login-display.component.html',
  styleUrls: ['./login-display.component.css']
})
export class LoginDisplayComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private _logindata: LogindataService) { }
  hide:string = 'false';
  ngOnInit() {
      this.loginForm = new FormGroup({
        u_email_id: new FormControl(null, [Validators.required, Validators.email]),
        u_password: new FormControl(null, [Validators.required]),
      });
  }
  onLogin() {
       this._logindata.login(this.loginForm.value).subscribe(
         (x: users[]) => {
           if (x.length == 1){
                alert("valid");
           }
           else {
             alert("invalid");
           }
         }
       );
      }

}
