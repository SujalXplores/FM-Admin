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
import { MatExpansionModule,MatButtonToggleModule,MatSnackBarModule,MatTooltipModule,MatMenuModule,MatPaginatorModule, MatNativeDateModule, MatProgressBarModule, MatSortModule, MatTableModule, MatSelectModule, MatCardModule, MatRadioModule, MatInputModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule} from '@angular/material';
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
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { AddcartdetailComponent } from './cart-details/addcartdetail/addcartdetail.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DialogComponent } from './users/dialog/dialog.component';
import { ViewMoreProductComponent } from './product/view-more-product/view-more-product.component';
import { HealthArticlesComponent } from './health-articles/health-articles.component';
import { OrderDialogComponent } from './order/order-dialog/order-dialog.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ProductPhotoComponent } from './product-photo/product-photo.component';
import { ViewMoreProductPhotoComponent } from './product-photo/view-more-product-photo/view-more-product-photo.component';
import { AddproductPhotoComponent } from './product-photo/addproduct-photo/addproduct-photo.component';
import { CalenderComponent } from './calender/calender.component';
import { ExitDialogComponent } from './main-nav/exit-dialog/exit-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    UsersComponent,
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
    CartDetailsComponent,
    AddcartdetailComponent,
    DialogComponent,
    ViewMoreProductComponent,
    HealthArticlesComponent,
    OrderDialogComponent,
    ForgotPasswordComponent,
    ProductPhotoComponent,
    ViewMoreProductPhotoComponent,
    AddproductPhotoComponent,
    CalenderComponent,
    ExitDialogComponent
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
    MatButtonToggleModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatTooltipModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatSelectModule,
    MatCardModule,
    MatRadioModule,
    MatSnackBarModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FeatherModule.pick(allIcons),//feather-icons
    DragDropModule
  ],
  entryComponents: [
    DialogComponent,
    ViewMoreProductComponent,
    OrderDialogComponent,
    ViewMoreProductPhotoComponent,
    ExitDialogComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

