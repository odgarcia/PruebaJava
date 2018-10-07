import { Component } from '@angular/core';

import { CustomerOrder } from '../entities/CustomerOrder';
import { Customer } from '../entities/Customer';
import { Product } from '../entities/Product';
import { APIService } from '../api.service';
import { OrderDetail } from '../entities/OrderDetail';

@Component({
  selector: 'app-order-form',
  templateUrl: './Order-form.component.html',
  styleUrls: ['./Order-form.component.css']
})
export class OrderFormComponent {

  products: Product[];
  customers: Customer[];
  customerOrder: CustomerOrder;
  order: CustomerOrder;
  orderDetails: OrderDetail[];
  submitted = false;
  total = '';

  constructor(private customerService: APIService) {
  }

  model = new CustomerOrder('1000', 'Calle Falsa 123', '');


  ngOnInit() {
    this.getCustomers();
  }

  onChangeCustomer(): void {
    this.customerService.getCustomerAvailableProducts(this.model['customer'])
      .subscribe(products => this.products = products);
  }

  onSelectProduct(): void {
    console.log(this.products[0]['product']['price']);
    this.total = this.products[0]['product']['price'];
  }

  getCustomers(): void {
    this.customerService.getCustomers()
      .subscribe(customers => this.customers = customers);
  }



  onSubmit() { this.submitted = true; console.log(this.model); this.newOrder()}

  newOrder() {
    console.log("guardando");
    this.order = new CustomerOrder(this.total, this.model['deliveryAddress'], this.model['product']);
    this.customerService.createOrder(this.order).subscribe( data => {
      alert("Order created successfully.");
    });
  }
}