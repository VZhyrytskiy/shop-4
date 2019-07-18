import { Injectable } from '@angular/core';
import { Category, IProduct, PRODUCTS } from './product.model';

const products: IProduct[] = PRODUCTS;

@Injectable({
	providedIn: 'root',
})
export class ProductService {
	constructor() {}

	public getProducts(): IProduct[] {
		return products;
	}
}
