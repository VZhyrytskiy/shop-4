import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IComplexProduct } from '../../product-list/product/product.model';

@Component({
	selector: 'app-cart-item',
	templateUrl: './cart-item.component.html',
	styleUrls: ['./cart-item.component.less'],
})
export class CartItemComponent implements OnInit {
	@Input() complexProduct: IComplexProduct;
	@Output() notifyRemoveProduct: EventEmitter<number> = new EventEmitter<number>();
	totalCostOfProduct: number;

	constructor() {}

	ngOnInit() {
		this.totalCostOfProduct = this.complexProduct.product.price * this.complexProduct.amount;
	}

	public removeProduct(id: number): void {
		this.notifyRemoveProduct.emit(id);
	}
}
