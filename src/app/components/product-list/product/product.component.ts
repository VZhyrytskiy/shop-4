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
	name: string;
	description: string;
	price: number;
	category: Category;
	isAvailable: boolean;
	authors: string[];

	constructor() {}

	ngOnInit() {
		// от этого кода можно уже избавляться
		this.name = 'ng-book';
		this.description = 'The Complete Book on Angular';
		this.price = 79;
		this.category = Category.Programming;
		this.isAvailable = true;
		this.authors = [
			'Nate Murray',
			'Felipe Coury',
			'Ari Lerner',
			'Carlos Taborda',
		];
	}

	public onBuy(itemName: string): void {
		console.log(`You have bought the book ${itemName}`);
	}

	public addProduct(product: IProduct): void {
		this.notifyParentAdded.emit(product);
	}
}
