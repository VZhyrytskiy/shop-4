import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from './product.model';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.less'],
})
export class ProductComponent implements OnInit {
	@Input() product: IProduct;
	@Output() notifyBuyProduct: EventEmitter<number> = new EventEmitter<number>();

	constructor() {}

	ngOnInit() {}

	public addProduct(id: number): void {
		this.notifyBuyProduct.emit(id);
	}

	public showReview(id: number): void {}
}
