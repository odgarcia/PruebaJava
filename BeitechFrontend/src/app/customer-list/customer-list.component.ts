import { Component } from '@angular/core';

import { Customer } from '../entities/Customer';
import { APIService } from '../api.service';



@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})

export class CustomerListComponent {
  title = 'Customer orders';
  customers: Customer[];

  constructor(private customerService: APIService) {
  }

  ngOnInit() {
    this.getCustomers();
  }

  //Invocacion servicio clientes
  getCustomers(): void {
    this.customerService.getCustomers()
      .subscribe(customers => this.customers = customers);
  }

}
