import { Component, OnInit } from '@angular/core';
import { users } from '../users';
import { UsersdataService } from '../usersdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  arrUser: users[] = [];
  constructor(private _userdata: UsersdataService, private _router: Router) { }
  value = '';
  ngOnInit() {
  }
    onUesrAdd(f) {
      this._userdata.addUsers(f.value).subscribe(
        (data: any) => {
          this.arrUser.push(f.value);
          this._router.navigate(['']);
        }
      );
    }

}
