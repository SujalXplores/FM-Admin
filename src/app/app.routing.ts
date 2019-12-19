import {RouterModule, Routes } from '@angular/router';
import {MainNavComponent} from './main-nav/main-nav.component';
import { EdituserComponent } from './users/edituser/edituser.component';
import { UsersComponent } from './users/users.component';
import { AdduserComponent } from './users/adduser/adduser.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './product/product.component';
import { AddproductComponent } from './product/addproduct/addproduct.component';
import { EditproductComponent } from './product/editproduct/editproduct.component';
import { CategoryComponent } from './category/category.component';
import { LoginDisplayComponent } from './login-display/login-display.component';

const arr: Routes = [
  {path: 'login', component: LoginDisplayComponent},
  {path: 'users', component: UsersComponent},
  {path: 'product', component: ProductComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'addUser', component: AdduserComponent},
  {path: 'addProduct', component: AddproductComponent},
  {path: 'edituser/:email', component: EdituserComponent},
  {path: 'editproduct/:pro_id', component: EditproductComponent},
  {path: 'pagenotfound', component: PagenotfoundComponent},
  {path: '**', redirectTo: '/pagenotfound'}
];

export const routingArr = RouterModule.forRoot(arr);
