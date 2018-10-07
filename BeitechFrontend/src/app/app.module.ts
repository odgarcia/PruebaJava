import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderCreateComponent } from './order-create/order-create.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CustomerAvailableProductListComponent } from './customer-available-product-list/customer-available-product-list.component';
import { CustomerAvailableProductCreateComponent } from './customer-available-product-create/customer-available-product-create.component';


import {AppRoutingModule} from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule }   from '@angular/forms';

import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';
import { OrderFormComponent } from './order-form/order-form.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent,
    OrderCreateComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    ProductCreateComponent,
    ProductListComponent,
    CustomerAvailableProductListComponent,
    CustomerAvailableProductCreateComponent,
    OrderFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DropdownModule,
    TableModule,    
    BrowserAnimationsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
