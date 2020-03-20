import { Component, OnInit } from '@angular/core';
import { CategorydataService } from '../categorydata.service';
import { Router } from '@angular/router';
import { category } from '../category';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  arrCategory: category[] = [];

  constructor(private _snackBar: MatSnackBar,private _catdata: CategorydataService, private _router: Router) { }
  value = '';

  ngOnInit(): void {
  }

  onCategoryAdd(f) {
    this._catdata.addCategory(f.value).subscribe(
      (data: any) => {
        this.arrCategory.push(f.value);
        this._router.navigate(['/nav/category']);
      }
    );
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message , action, {
      duration: 5000,
      verticalPosition: 'bottom', // 'top' | 'bottom'
      horizontalPosition: 'center', //'start' | 'center' | 'end' | 'left' | 'right'
      panelClass: ['success']
    });
  }
}
