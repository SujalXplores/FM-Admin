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
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTreeModule } from '@angular/material/tree';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { routingArr } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EdituserComponent } from './users/edituser/edituser.component';
import { AdduserComponent } from './users/adduser/adduser.component';
import { PhoneDirective } from './shared/phone.directive';
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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DialogComponent } from './users/dialog/dialog.component';
import { ViewMoreProductComponent } from './product/view-more-product/view-more-product.component';
import { OrderDialogComponent } from './order/order-dialog/order-dialog.component';
import { ProductPhotoComponent } from './product-photo/product-photo.component';
import { ViewMoreProductPhotoComponent } from './product-photo/view-more-product-photo/view-more-product-photo.component';
import { AddproductPhotoComponent } from './product-photo/addproduct-photo/addproduct-photo.component';
import { EditproductPhotoComponent } from './product-photo/editproduct-photo/editproduct-photo.component';
import { ValetMailComponent } from './deliveryboy/valet-mail/valet-mail.component';
import { MultipleOrderDisplayComponentComponent } from './multiple-order-display-component/multiple-order-display-component.component';
import { MailUserComponent } from './users/mail-user/mail-user.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { AddcategoryComponent } from './category/addcategory/addcategory.component';
import { ViewMoreDeliveryboyComponent } from './deliveryboy/view-more-deliveryboy/view-more-deliveryboy.component';
import { DeliverydetailComponent } from './deliverydetail/deliverydetail.component';
import { AddAssignedOrdersComponent } from './deliverydetail/add-assigned-orders/add-assigned-orders.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { TrackingdisplayComponent } from './trackingdisplay/trackingdisplay.component';
import { ViewMoreComponent } from './deliverydetail/view-more/view-more.component';
import { PdfTableComponent } from './product/pdf-table/pdf-table.component';

import { NgOtpInputModule } from 'ng-otp-input';
import { WalletComponent } from './wallet/wallet.component';

import 'hammerjs';
import { CustomDialogComponent } from './shared/custom-dialog/custom-dialog.component';
import { NumbersOnlyDirective } from './shared/numbers-only.directive';
import { NumberMaskPipe } from './shared/number-mask.pipe';

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
    DialogComponent,
    ViewMoreProductComponent,
    OrderDialogComponent,
    ProductPhotoComponent,
    ViewMoreProductPhotoComponent,
    AddproductPhotoComponent,
    EditproductPhotoComponent,
    ValetMailComponent,
    MultipleOrderDisplayComponentComponent,
    MailUserComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    AddcategoryComponent,
    ViewMoreDeliveryboyComponent,
    DeliverydetailComponent,
    AddAssignedOrdersComponent,
    EditCategoryComponent,
    TrackingdisplayComponent,
    ViewMoreComponent,
    PdfTableComponent,
    WalletComponent,
    CustomDialogComponent,
    NumbersOnlyDirective,
    NumberMaskPipe,
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
    MatTabsModule,
    MatStepperModule,
    DragDropModule,
    MatGridListModule,
    MatChipsModule,

    NgOtpInputModule
  ],
  entryComponents: [
    DialogComponent,
    ViewMoreProductComponent,
    OrderDialogComponent,
    ViewMoreProductPhotoComponent,
    ValetMailComponent,
    MailUserComponent,
    ViewMoreComponent,//assigned order details
    AdddeliveryboyComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }