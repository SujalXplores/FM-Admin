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
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
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
import { OrderDialogComponent } from './order/order-dialog/order-dialog.component';
import { ProductPhotoComponent } from './product-photo/product-photo.component';
import { ViewMoreProductPhotoComponent } from './product-photo/view-more-product-photo/view-more-product-photo.component';
import { AddproductPhotoComponent } from './product-photo/addproduct-photo/addproduct-photo.component';
import { CalenderComponent } from './calender/calender.component';
import { ExitDialogComponent } from './main-nav/exit-dialog/exit-dialog.component';
import { EditproductPhotoComponent } from './product-photo/editproduct-photo/editproduct-photo.component';
import { ValetMailComponent } from './deliveryboy/valet-mail/valet-mail.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderDetailviewmoreComponent } from './order-detail/order-detailviewmore/order-detailviewmore.component';
import { MultipleOrderDisplayComponentComponent } from './multiple-order-display-component/multiple-order-display-component.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTreeModule } from '@angular/material/tree';
import { MailUserComponent } from './users/mail-user/mail-user.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { AddcategoryComponent } from './category/addcategory/addcategory.component';
import { ViewMoreDeliveryboyComponent } from './deliveryboy/view-more-deliveryboy/view-more-deliveryboy.component';
import { DeliverydetailComponent } from './deliverydetail/deliverydetail.component';
import { AddAssignedOrdersComponent } from './deliverydetail/add-assigned-orders/add-assigned-orders.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { AutoFocusDirective } from './auto-focus.directive';
import { TrackingdisplayComponent } from './trackingdisplay/trackingdisplay.component';
import { ViewMoreComponent } from './deliverydetail/view-more/view-more.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { PdfTableComponent } from './product/pdf-table/pdf-table.component';




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
    OrderDialogComponent,
    ProductPhotoComponent,
    ViewMoreProductPhotoComponent,
    AddproductPhotoComponent,
    CalenderComponent,
    ExitDialogComponent,
    EditproductPhotoComponent,
    ValetMailComponent,
    OrderDetailComponent,
    OrderDetailviewmoreComponent,
    MultipleOrderDisplayComponentComponent,
    MailUserComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    AddcategoryComponent,
    ViewMoreDeliveryboyComponent,
    DeliverydetailComponent,
    AddAssignedOrdersComponent,
    EditCategoryComponent,
    AutoFocusDirective,
    TrackingdisplayComponent,
    ViewMoreComponent,
    PdfTableComponent,
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
    MatTreeModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatBadgeModule,
    MatButtonModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
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
    MatSlideToggleModule,
    FeatherModule.pick(allIcons),//feather-icons
    DragDropModule,
    MatGridListModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'
    }),
    ChartsModule,
    PDFExportModule,
  ],
  entryComponents: [
    DialogComponent,
    ViewMoreProductComponent,
    OrderDialogComponent,
    ViewMoreProductPhotoComponent,
    ExitDialogComponent,
    ValetMailComponent,
    OrderDetailviewmoreComponent,
    MailUserComponent,
    ViewMoreComponent,//assigned order details
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
