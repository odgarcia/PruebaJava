import { Component } from '@angular/core';

import { Customer } from '../entities/Customer';
import { CustomerOrder } from '../entities/CustomerOrder';
import { APIService } from '../api.service';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {
  	title = 'Customer orders';
    customerOrders: CustomerOrder[];
    id: string;
    name: string;

    constructor(private customerService: APIService,private activatedRoute: ActivatedRoute) {
	  }

	ngOnInit() {
		this.activatedRoute.params.subscribe(paramsId => {
      this.id = paramsId.id;
      this.name = paramsId.name;
    });
    console.log(this.id);
    this.onChangeCustomer();
  }
  
  onChangeCustomer(){
    this.customerService.getOrders(this.id)
        .subscribe(customerOrders => this.customerOrders = customerOrders);
  }

}
