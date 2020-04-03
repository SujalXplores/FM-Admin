import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CategorydataService } from '../categorydata.service';
import { Router } from '@angular/router';
import { category } from '../category';
import { NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  arrCategory: category[] = [];

  constructor(private notificationService: NotificationService, private _catdata: CategorydataService, private _router: Router) { }
  value = '';
  
  @ViewChild('focus') private elementRef: ElementRef;
  public ngAfterViewInit(): void {
    this.elementRef.nativeElement.focus();
  }

  ngOnInit(): void {
  }

  onCategoryAdd(f) {
    this._catdata.addCategory(f.value).subscribe(
      (data: any) => {
        this.arrCategory.push(f.value);
        this._router.navigate(['/nav/category']);
      }
    );
    this.notificationService.success('Record added successfully');
  }
}
