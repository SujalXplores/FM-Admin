import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _snackbar: MatSnackBar) { }
  title = 'Future MediSurgico';

  ngOnInit() {
    addEventListener('offline', (e) => {
      this._snackbar.open('No connection', '', {
        duration: 5000
      });
    });
    addEventListener('online', (e) => {
      this._snackbar.open('Back Online', '', {
        duration: 2000,
        panelClass: ['online']
      });
    });
  }
}