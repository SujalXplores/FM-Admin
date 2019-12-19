import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { UsersComponent } from './users/users.component';
import { MatPaginatorModule, MatSortModule, MatTableModule, MatSelectModule, MatCardModule, MatRadioModule, MatInputModule, MatCheckboxModule, MatDialogModule} from '@angular/material';
import { ReactiveFormsModule} from '@angular/forms';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { routingArr } from './app.routing';
import { FormsModule } from '@angular/forms';
import { EdituserComponent } from './users/edituser/edituser.component';
import { AdduserComponent } from './users/adduser/adduser.component';
import { PhoneDirective } from './phone.directive';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './product/product.component';
import { AddproductComponent } from './product/addproduct/addproduct.component';
import { EditproductComponent } from './product/editproduct/editproduct.component';
import { CategoryComponent } from './category/category.component';
import { LoginDisplayComponent } from './login-display/login-display.component';
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
    LoginDisplayComponent
  ],
  imports: [
    routingArr,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
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
    ReactiveFormsModule,
    FormsModule
  ],
  entryComponents: [
    DialogboxComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

