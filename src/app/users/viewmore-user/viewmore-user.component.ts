import { Component, OnInit } from '@angular/core';
import { UsersdataService } from '../usersdata.service';
import { ActivatedRoute } from '@angular/router';
import { users } from '../users';

@Component({
  selector: 'app-viewmore-user',
  templateUrl: './viewmore-user.component.html',
  styleUrls: ['./viewmore-user.component.css']
})
export class ViewmoreUserComponent implements OnInit {

  constructor() { }

  user_email: string;
  user_name: string;
  user_phone: string;
  user_password: string;
  user_address:string;
  ngOnInit() {
    
  }

}
