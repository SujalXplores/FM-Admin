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
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
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
import { ProductPhotoComponent } from './product-photo/product-photo.component';
import { ViewMoreProductPhotoComponent } from './product-photo/view-more-product-photo/view-more-product-photo.component';
import { AddproductPhotoComponent } from './product-photo/addproduct-photo/addproduct-photo.component';
import { CalenderComponent } from './calender/calender.component';
import { ExitDialogComponent } from './main-nav/exit-dialog/exit-dialog.component';
import { EditproductPhotoComponent } from './product-photo/editproduct-photo/editproduct-photo.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ValetMailComponent } from './deliveryboy/valet-mail/valet-mail.component';

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
    HomeComponent,
    CartDetailsComponent,
    AddcartdetailComponent,
    DialogComponent,
    ViewMoreProductComponent,
    HealthArticlesComponent,
    OrderDialogComponent,
    ProductPhotoComponent,
    ViewMoreProductPhotoComponent,
    AddproductPhotoComponent,
    CalenderComponent,
    ExitDialogComponent,
    EditproductPhotoComponent,
    ChangePasswordComponent,
    ValetMailComponent
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
    ValetMailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }