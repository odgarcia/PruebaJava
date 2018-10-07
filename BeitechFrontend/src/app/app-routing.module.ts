import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderCreateComponent } from './order-create/order-create.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CustomerAvailableProductListComponent } from './customer-available-product-list/customer-available-product-list.component';
import { CustomerAvailableProductCreateComponent } from './customer-available-product-create/customer-available-product-create.component';


const routes: Routes = [
  
  { path: '', redirectTo: 'orders', pathMatch: 'full' },
  {
    path: 'orders/:id/:name',
    component: OrderListComponent
  },
  {
    path: 'create-orders',
    component: OrderCreateComponent      
  },    
  {
    path: 'customer',
    component: CustomerListComponent      
  },
  {
    path: 'create-customer',
    component: CustomerCreateComponent      
  },  
  {
    path: 'products',
    component: ProductListComponent      
  },
  {
    path: 'create-products',
    component: ProductCreateComponent      
  },    
  {
    path: 'customeravailableproducts',
    component: CustomerAvailableProductListComponent      
  },
  {
    path: 'create-customeravailableproducts',
    component: CustomerAvailableProductCreateComponent      
  },
  {
    path: 'app',
    component: AppComponent      
  }   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }