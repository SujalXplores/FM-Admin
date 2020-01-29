import { Component, OnInit} from '@angular/core';
import { MatDialogRef} from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exit-dialog',
  templateUrl: './exit-dialog.component.html',
  styleUrls: ['./exit-dialog.component.css']
})
export class ExitDialogComponent implements OnInit {

  constructor(public router: Router, public dialogRef: MatDialogRef<ExitDialogComponent>) { }

  ngOnInit() {
  }
  onCancelClick() {
    this.dialogRef.close();
  }
  onYesClick() {
      localStorage.clear();
      this.router.navigate(['/']);
      this.dialogRef.close();
  }
}
