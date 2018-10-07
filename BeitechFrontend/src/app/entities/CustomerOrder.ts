import { OrderDetail } from './OrderDetail';

export class CustomerOrder {
	id: number;
	orderDate: String;
	total: String;
	deliveryAddress: String;
	details: OrderDetail[];


	constructor(
		total: String,
		deliveryAddress: String,
		details: String) { }
}