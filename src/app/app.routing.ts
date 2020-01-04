import { RouterModule, Routes } from '@angular/router';
import { MainNavComponent } from "./main-nav/main-nav.component";
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
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { UserAuthGuardService } from "./login-display/user-auth-guard.service";
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { AddcartdetailComponent } from './cart-details/addcartdetail/addcartdetail.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { HealthArticlesComponent } from './health-articles/health-articles.component';


const arr: Routes = [
  { path: '', component: LoginDisplayComponent },
  { path: 'nav',
    canActivate: [UserAuthGuardService],
    component: MainNavComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'users', component: UsersComponent},
      {path: 'addUser', component: AdduserComponent},
      {path: 'edituser/:email', component: EdituserComponent},
      {path: 'product', component: ProductComponent},
      {path: 'addProduct', component: AddproductComponent},
      {path: 'editproduct/:pro_id', component: EditproductComponent},
      {path: 'category', component: CategoryComponent},
      {path: 'order', component: OrderComponent},
      {path: 'addOrder', component: AddorderComponent},
      {path: 'editorder/:order_id', component: EditorderComponent},
      {path: 'deliveryboy', component: DeliveryboyComponent},
      {path: 'adddeliveryboy', component: AdddeliveryboyComponent},
      {path: 'editdeliveryboy/:deliveryboy_id', component: EditdeliveryboyComponent},
      {path: 'cart', component: CartComponent},
      {path: 'cart_details', component: CartDetailsComponent},
      {path: 'addcart', component: AddcartComponent},
      {path: 'addcartdetail', component: AddcartdetailComponent},
      {path: 'editcart/:cart_id', component: EditcartComponent},
      {path: 'todo', component: ToDoListComponent},
      {path: 'h-article', component: HealthArticlesComponent},
  ]
  },

  {path: 'pagenotfound', component: PagenotfoundComponent},
  {path: '**', redirectTo: '/pagenotfound'}

];

export const routingArr = RouterModule.forRoot(arr);
