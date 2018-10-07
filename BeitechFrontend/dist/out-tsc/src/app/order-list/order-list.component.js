var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { APIService } from '../api.service';
var OrderListComponent = /** @class */ (function () {
    function OrderListComponent(customerService) {
        this.customerService = customerService;
        this.title = 'Customer orders';
    }
    OrderListComponent.prototype.ngOnInit = function () {
        this.getCustomers();
        this.customerOrders = [];
    };
    OrderListComponent.prototype.getCustomers = function () {
        var _this = this;
        this.customerService.getCustomers()
            .subscribe(function (customers) { return _this.customers = customers; });
    };
    OrderListComponent.prototype.onChangeCustomer = function () {
        var _this = this;
        var endDate = new Date();
        var startDate = new Date();
        startDate.setDate(endDate.getDate() - 30);
        this.customerService.getOrders(this.selectedCustomer, startDate, endDate)
            .subscribe(function (customerOrders) { return _this.customerOrders = customerOrders; });
    };
    OrderListComponent = __decorate([
        Component({
            selector: 'app-order-list',
            templateUrl: './order-list.component.html',
            styleUrls: ['./order-list.component.css']
        }),
        __metadata("design:paramtypes", [APIService])
    ], OrderListComponent);
    return OrderListComponent;
}());
export { OrderListComponent };
//# sourceMappingURL=order-list.component.js.map