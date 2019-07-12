import { Component, OnInit } from '@angular/core';
import { Category } from './products.model';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.less'],
})
export class ProductComponent implements OnInit {
	name: string;
	description: string;
	price: number;
	category: Category;
	isAvailable: boolean;
	authors: string[];

	constructor() {}

	ngOnInit() {
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

	public onBuy(itemName: string) {
		console.log(`You have bought the book ${itemName}`);
	}
}
