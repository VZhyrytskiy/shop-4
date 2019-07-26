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

	constructor() {}

	ngOnInit() {}

	public getTotalCostOfProduct(price: number, amount: number): number {
		return price * amount;
	}

	public removeProduct(id: number): void {
		this.notifyRemoveProduct.emit(id);
	}
}
