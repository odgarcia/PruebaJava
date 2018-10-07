
import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';

import { Observable} from 'rxjs';
import { Customer } from './entities/Customer';
import { Product } from './entities/Product';
import { CustomerOrder } from './entities/CustomerOrder';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  API_URL = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {}

  getCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`${this.API_URL}`+ "/customers/")
  }

  getOrders(id : String) : Observable<CustomerOrder[]> {
    var url = `${this.API_URL}` + "/customers/" + id + "/orders/";
    return this.httpClient.get<CustomerOrder[]>(url)
  }

  createCustomers(customer){
    return this.httpClient.post(`${this.API_URL}/customers/`,customer);
  }

  createOrder(order: CustomerOrder): Observable<CustomerOrder> {
    console.log(JSON.stringify(order));
    return this.httpClient.post<CustomerOrder>(`${this.API_URL}/order/`, order);
  }

  updateCustomers(customer){
    return this.httpClient.put(`${this.API_URL}/customers/`,customer);
  }
  deleteCustomers(customer){
    return this.httpClient.delete(`${this.API_URL}/customers/${customer.pk}`);
  }
  getProducts(){
    return this.httpClient.get(`${this.API_URL}/products`);
  }

  
  getCustomerAvailableProducts(id : String) : Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.API_URL}/customers/`+id+"/products");
  }
}