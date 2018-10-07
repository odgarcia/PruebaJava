var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderCreateComponent } from './order-create/order-create.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CustomerAvailableProductListComponent } from './customer-available-product-list/customer-available-product-list.component';
import { CustomerAvailableProductCreateComponent } from './customer-available-product-create/customer-available-product-create.component';
var routes = [
    { path: '', redirectTo: 'orders', pathMatch: 'full' },
    {
        path: 'orders',
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
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map