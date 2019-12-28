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
  selectedFile:File=null;
  value = '';
  ngOnInit() {
  }
    onUesrAdd(f) {
          let fd=new FormData();
          fd.append('u_email_id',f.value.u_email_id);
          fd.append('u_password',f.value.u_password);
          fd.append('u_name',f.value.u_name);
          fd.append('u_mobileno',f.value.u_mobileno);
          fd.append('u_address',f.value.u_address);
          fd.append('image',this.selectedFile,this.selectedFile.name);

      this._userdata.addUsers(fd).subscribe(
        (data: any[]) => {
          this._router.navigate(['/nav/users']);
          console.log(data);
        }
      );
    }

    onChange(f){
      this.selectedFile=<File>f.target.files[0];
    }
}
