import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  password_update: FormGroup;
  constructor() { }

  ngOnInit() {
    this.password_update = new FormGroup({
      password: new FormControl(null , [Validators.required]),
      new_password: new FormControl(null , [Validators.required]),
      confirm_password: new FormControl(null , [Validators.required])
    });
  }
  OnPasswordEdit() {

  }
}
