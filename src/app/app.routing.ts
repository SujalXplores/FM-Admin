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
import { OrderComponent } from './order/order.component';
import { AddorderComponent } from './order/addorder/addorder.component';
import { EditorderComponent } from './order/editorder/editorder.component';
import { DeliveryboyComponent } from './deliveryboy/deliveryboy.component';
import { AdddeliveryboyComponent } from './deliveryboy/adddeliveryboy/adddeliveryboy.component';
import { EditdeliveryboyComponent } from './deliveryboy/editdeliveryboy/editdeliveryboy.component';
import { CartComponent } from './cart/cart.component';
import { AddcartComponent } from './cart/addcart/addcart.component';
import { EditcartComponent } from './cart/editcart/editcart.component';

const arr: Routes = [
  {path: 'login', component: LoginDisplayComponent},
  {path: 'users', component: UsersComponent},
  {path: 'product', component: ProductComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'order', component: OrderComponent},
  {path: 'deliveryboy', component: DeliveryboyComponent},
  {path: 'cart', component: CartComponent},
  {path: 'addUser', component: AdduserComponent},
  {path: 'addProduct', component: AddproductComponent},
  {path: 'addOrder', component: AddorderComponent},
  {path: 'adddeliveryboy', component: AdddeliveryboyComponent},
  {path: 'addcart', component: AddcartComponent},
  {path: 'edituser/:email', component: EdituserComponent},
  {path: 'editproduct/:pro_id', component: EditproductComponent},
  {path: 'editorder/:order_id', component: EditorderComponent},
  {path: 'editdeliveryboy/:deliveryboy_id', component: EditdeliveryboyComponent},
  {path: 'editcart/:cart_id', component: EditcartComponent},
  {path: 'pagenotfound', component: PagenotfoundComponent},
  {path: '**', redirectTo: '/pagenotfound'}
];

export const routingArr = RouterModule.forRoot(arr);
