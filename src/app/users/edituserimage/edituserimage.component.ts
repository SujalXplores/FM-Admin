import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersdataService } from '../usersdata.service';
import { FormGroup, FormControl } from '@angular/forms';
import { users } from '../users';

@Component({
  selector: 'app-edituserimage',
  templateUrl: './edituserimage.component.html',
  styleUrls: ['./edituserimage.component.css']
})
export class EdituserimageComponent implements OnInit {

  constructor(private _router:Router , private _actrou:ActivatedRoute , private _userser: UsersdataService) { }
  u_email_id: string;
  updateuserpic : FormGroup;
  userurl: string = null;
  selectedFile: File = null;

  ngOnInit(): void {
    this.u_email_id = this._actrou.snapshot.params["u_email_id"];

    this.updateuserpic = new FormGroup({
      u_image: new FormControl(null)
    });
    this._userser.editUser (this.u_email_id).subscribe(
      (data: users[])=>{
        this.formDataBind(data[0]);
        console.log(data[0]);
      }
    );
  }

  formDataBind(item: users){
    this.userurl = "http://localhost:3000/images/user_photos/" + item.u_image;
    console.log(this.userurl);
    this.updateuserpic.patchValue({
      u_image : item.u_image,
    });
  }

  onChange(f)
  {
    this.selectedFile = <File>f.target.files[0];
    console.log(this.selectedFile);
  }

  onuserimageupdate()
  {
    let fd = new FormData();
    if(this.selectedFile != null) {
     fd.append('u_image',this.selectedFile,this.selectedFile.name);
     console.log(this.selectedFile.name);
    }
    else{
      fd.append('u_image',this.updateuserpic.get('u_image').value);
      console.log(this.updateuserpic.get('u_image').value);
    }

    this._userser.updateUserimage(this.u_email_id,fd).subscribe(
      (data: users)=>{
        console.log(data)
        alert("Successfully edited");
        this._router.navigate(['/nav/users']);
      }
    );

  }

}
