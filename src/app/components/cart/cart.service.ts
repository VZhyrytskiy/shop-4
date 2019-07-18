import { Injectable } from '@angular/core';
import { Category, IProduct, PRODUCTS } from '../product/product.model';

const productsInBasket: IProduct[] = PRODUCTS.filter(item => item.isAvailable);

@Injectable({
	providedIn: 'root',
})
export class CartService {
	constructor() {}

	public getProductsInBasket(): IProduct[] {
		return productsInBasket;
	}
}
