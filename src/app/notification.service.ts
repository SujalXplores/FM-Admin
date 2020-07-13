import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(public snackBar: MatSnackBar) { }

  green: MatSnackBarConfig = {
    duration: 5000,
    horizontalPosition: 'right',
    verticalPosition: 'top',
    panelClass: ['notification-green']
  }

  red: MatSnackBarConfig = {
    duration: 5000,
    horizontalPosition: 'right',
    verticalPosition: 'top',
    panelClass: ['notification-red']
  }

  blue: MatSnackBarConfig = {
    duration: 5000,
    horizontalPosition: 'right',
    verticalPosition: 'top',
    panelClass: ['notification-blue']
  }

  success(msg) {
    this.snackBar.open(msg, '', this.green);
  }

  warn(msg) {
    this.snackBar.open(msg, '', this.red);
  }
  
  info(msg) {
    this.snackBar.open(msg, '', this.blue);
  }
}