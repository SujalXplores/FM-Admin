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
import { MatMenuModule,MatPaginatorModule, MatNativeDateModule, MatProgressBarModule, MatSortModule, MatTableModule, MatSelectModule, MatCardModule, MatRadioModule, MatInputModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatDialog, MatDialogRef} from '@angular/material';
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
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { AddcartdetailComponent } from './cart-details/addcartdetail/addcartdetail.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { EditcartdetailComponent } from './cart-details/editcartdetail/editcartdetail.component';

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
    ViewmoreUserComponent,
    CartDetailsComponent,
    AddcartdetailComponent,
    ToDoListComponent,
    EditcartdetailComponent
  ],
  imports: [
    routingArr,
    BrowserModule,
    FlexLayoutModule, //flex-layout
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    //angular-material
    MatToolbarModule,
    MatMenuModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
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
    FeatherModule.pick(allIcons),
    DragDropModule //feather-icons
  ],
  entryComponents: [
    DialogboxComponent,
    ViewmoreUserComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

