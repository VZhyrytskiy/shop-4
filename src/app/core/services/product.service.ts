import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProduct, PRODUCTS } from '../../components/product-list/product/product.model';

const products: IProduct[] = PRODUCTS;

@Injectable({
	providedIn: 'root',
})
export class ProductService {
	constructor() {}

	public getProducts(): Observable<IProduct[]> {
		return of(products);
	}
}
