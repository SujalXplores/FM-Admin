import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { users } from '../users/users';
import { UsersdataService } from '../users/usersdata.service';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css']
})
export class DialogboxComponent implements OnInit {
  userarr: users[] = [];
  name: string = "";
  constructor(private _data: UsersdataService,public dialogRef: MatDialogRef<DialogboxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: users, ) { }
    onCancelClick() {
      this.dialogRef.close();
    }

  ngOnInit() {
    this.name = this.data.u_name;
  }

}
