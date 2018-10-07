var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var APIService = /** @class */ (function () {
    function APIService(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = 'http://localhost:8080';
    }
    APIService.prototype.getCustomers = function () {
        return this.httpClient.get("" + this.API_URL);
    };
    APIService.prototype.getOrders = function (customer, startDate, endDate) {
        var formatStartDate = startDate.toISOString().substring(0, 10);
        var formatEndDate = endDate.toISOString().substring(0, 10);
        var url = "" + this.API_URL + customer.id + "/orders/" + formatStartDate + "/" + formatEndDate;
        return this.httpClient.get(url);
    };
    APIService.prototype.createCustomers = function (customer) {
        return this.httpClient.post(this.API_URL + "/customers/", customer);
    };
    APIService.prototype.updateCustomers = function (customer) {
        return this.httpClient.put(this.API_URL + "/customers/", customer);
    };
    APIService.prototype.deleteCustomers = function (customer) {
        return this.httpClient.delete(this.API_URL + "/customers/" + customer.pk);
    };
    APIService.prototype.getProducts = function () {
        return this.httpClient.get(this.API_URL + "/products");
    };
    APIService.prototype.getCustomerAvailableProducts = function () {
        return this.httpClient.get(this.API_URL + "/customeravailableproducts");
    };
    APIService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], APIService);
    return APIService;
}());
export { APIService };
//# sourceMappingURL=api.service.js.map