import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorydataService } from '../categorydata.service';
import { category } from '../category';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar,private _act_route: ActivatedRoute, private _categorydata: CategorydataService, private _router: Router) { }
  c_id1: number;
  c_name1: string;

  ngOnInit() {
    this.c_id1 = this._act_route.snapshot.params["c_id"];
    console.log(this.c_id1);
    this._categorydata.editCategory(this.c_id1).subscribe(
      (data: category) => {
        this.c_id1 = data[0].c_id;
        this.c_name1 = data[0].c_name;
      }
    );
  }

  OnCategoryEdit(f) {
    this._categorydata.updateCategory(this.c_id1,f.value).subscribe(
      (data: any) => {
        this._router.navigate(['/nav/category']);
        console.log(f.value);
      }
    );
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message , action, {
      duration: 5000,
      verticalPosition: 'bottom', // 'top' | 'bottom'
      horizontalPosition: 'center', //'start' | 'center' | 'end' | 'left' | 'right'
      panelClass: ['warning']
    });
  }
}
