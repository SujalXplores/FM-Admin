import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LogindataService } from './logindata.service';
import { users } from '../users/users';
import { Router } from '@angular/router';
import { NotificationService } from '../notification.service';
@Component({
  selector: 'app-login-display',
  templateUrl: './login-display.component.html',
  styleUrls: ['./login-display.component.css']
})
export class LoginDisplayComponent implements OnInit {
  constructor(
    private notificationService: NotificationService,
    private _router: Router,
    private _logindata: LogindataService
  ) { }

  loginForm: FormGroup;
  hide: boolean = true;
  loading: boolean = false;

  ngOnInit() {
    this.loginForm = new FormGroup({
      u_email_id: new FormControl(null, [Validators.required, Validators.email]),
      u_password: new FormControl(null, [Validators.required]),
    });
  }

  onLogin() {
    this.loading = true;
    this._logindata.login(this.loginForm.value).subscribe((x: users[]) => {
      if (x.length == 1) {
        localStorage.setItem('u_email_id', this.loginForm.get('u_email_id').value);
        this._router.navigate(['/nav/dashboard']);
      }
      else {
        this.loading = false;
        this.notificationService.warn('Please check your Email/Password !');
      }
    }, (error) => {
      if (error.name == "HttpErrorResponse") {
        this.loading = false;
        this.notificationService.warn("Can't connect to server.");
      }
    });
  }
}