import { Injectable } from '@angular/core';
import { IProduct } from '../../components/product-list/product/product.model';

@Injectable({
	providedIn: 'root',
})
export class CartService {
	constructor() {}

	public getTotalAmount(products: IProduct[]): number {
		return products.length;
	}

	public getTotalSum(products: IProduct[]): number {
		return products.reduce((sum, current) => sum + current.price, 0);
	}
}
