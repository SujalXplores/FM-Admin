import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-display',
  templateUrl: './login-display.component.html',
  styleUrls: ['./login-display.component.css']
})
export class LoginDisplayComponent implements OnInit {

  constructor() { }
  hide:string = 'false';
  ngOnInit() {
  }

}
