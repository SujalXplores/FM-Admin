import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { UsersComponent } from './users/users.component';
import { MatPaginatorModule, MatNativeDateModule, MatProgressBarModule, MatSortModule, MatTableModule, MatSelectModule, MatCardModule, MatRadioModule, MatInputModule, MatCheckboxModule, MatDialogModule} from '@angular/material';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { routingArr } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EdituserComponent } from './users/edituser/edituser.component';
import { AdduserComponent } from './users/adduser/adduser.component';
import { PhoneDirective } from './phone.directive';
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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ViewmoreUserComponent } from './users/viewmore-user/viewmore-user.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    UsersComponent,
    DialogboxComponent,
    EdituserComponent,
    AdduserComponent,
    PhoneDirective,
    PagenotfoundComponent,
    ProductComponent,
    AddproductComponent,
    EditproductComponent,
    CategoryComponent,
    LoginDisplayComponent,
    OrderComponent,
    AddorderComponent,
    EditorderComponent,
    DeliveryboyComponent,
    AdddeliveryboyComponent,
    EditdeliveryboyComponent,
    CartComponent,
    AddcartComponent,
    EditcartComponent,
    SignupComponent,
    HomeComponent,
    ViewmoreUserComponent
  ],
  imports: [
    routingArr,
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatSelectModule,
    MatCardModule,
    MatRadioModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    DialogboxComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

