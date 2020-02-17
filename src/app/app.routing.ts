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
import { HealthArticlesComponent } from './health-articles/health-articles.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ProductPhotoComponent } from './product-photo/product-photo.component';
import { AddproductPhotoComponent } from './product-photo/addproduct-photo/addproduct-photo.component';
import { EditproductPhotoComponent } from './product-photo/editproduct-photo/editproduct-photo.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';


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
      {path: 'edituser/:u_email_id', component: EdituserComponent},
      {path: 'product', component: ProductComponent},
      {path: 'addProduct', component: AddproductComponent},
      {path: 'editproduct/:pro_id', component: EditproductComponent},
      {path: 'product_photo', component: ProductPhotoComponent},
      {path: 'editproduct_photo/:pro_photo_id', component: EditproductPhotoComponent},
      {path: 'addProductphoto', component: AddproductPhotoComponent},
      {path: 'category', component: CategoryComponent},
      {path: 'order', component: OrderComponent},
      {path: 'addOrder', component: AddorderComponent},
      {path: 'editorder/:order_id', component: EditorderComponent},
      {path: 'order_detail', component: OrderDetailComponent},
      {path: 'deliveryboy', component: DeliveryboyComponent},
      {path: 'adddeliveryboy', component: AdddeliveryboyComponent},
      {path: 'editdeliveryboy/:deliveryboy_id', component: EditdeliveryboyComponent},
      {path: 'cart', component: CartComponent},
      {path: 'cart_details', component: CartDetailsComponent},
      {path: 'addcart', component: AddcartComponent},
      {path: 'addcartdetail', component: AddcartdetailComponent},
      {path: 'editcart/:cart_id', component: EditcartComponent},
      {path: 'h-article', component: HealthArticlesComponent},
      {path: 'change-pass', component: ChangePasswordComponent}
  ]
  },

  {path: 'forgot', component: ForgotPasswordComponent},
  {path: 'pagenotfound', component: PagenotfoundComponent},
  {path: '**', redirectTo: '/pagenotfound'}

];

export const routingArr = RouterModule.forRoot(arr);
