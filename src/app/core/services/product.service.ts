import { Injectable } from '@angular/core';
import { IProduct, PRODUCTS } from '../../components/product-list/product/product.model';

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
