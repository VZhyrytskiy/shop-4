import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-cart-item',
	templateUrl: './cart-item.component.html',
	styleUrls: ['./cart-item.component.less'],
})
export class CartItemComponent implements OnInit {
	@Input() id: number;
	@Output() notifyParentRemoved: EventEmitter<number> = new EventEmitter<number>();

	constructor() {}

	ngOnInit() {}

	public removeProduct(productId: number): void {
		this.notifyParentRemoved.emit(productId);
	}
}
