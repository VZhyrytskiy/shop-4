import { Injectable } from '@angular/core';
import { Category, IProduct } from '../product/products.model';

const productsInBasket: IProduct[] = [
	{
		name: 'Matrematics for Children',
		description: 'Children Literature',
		price: 30,
		category: Category.Mathematics,
		isAvailable: true,
		authors: ['Ignatiev', 'Nikiforov'],
	},
	{
		name: 'Chemistry',
		description: 'School Book for Study',
		price: 40,
		category: Category.Chemistry,
		isAvailable: true,
		authors: ['Petrovich', 'Sidorova'],
	},
];

@Injectable({
	providedIn: 'root',
})
export class CartService {
	constructor() {}

	public getProducts(): IProduct[] {
		return productsInBasket;
	}
}
