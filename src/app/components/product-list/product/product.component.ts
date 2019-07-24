import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category, IProduct } from './product.model';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.less'],
})
export class ProductComponent implements OnInit {
	@Input() products: IProduct[];
	@Output() notifyParentAdded: EventEmitter<IProduct> = new EventEmitter<IProduct>();

	constructor() {}

	ngOnInit() {}

	public addProduct(product: IProduct): void {
		this.notifyParentAdded.emit(product);
	}
}
