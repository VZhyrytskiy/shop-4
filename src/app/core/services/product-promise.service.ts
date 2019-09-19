import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../../components/product-list/product/product.model';

@Injectable({
	providedIn: 'root',
})
export class ProductPromiseService {
	private productsUrl = 'http://localhost:3000/products';

	constructor(private http: HttpClient) {}

	public getProducts(): Promise<IProduct[]> {
		return this.http
			.get(this.productsUrl)		// Observable
			.toPromise()				// Observable to Promise
			.then(response => response as IProduct[])		// Promise API
			.catch(this.handleError);
	}

	public getProduct(id: number): Promise<IProduct> {
		const url = `${this.productsUrl}/${id}`;
		return this.http
			.get(url)
			.toPromise()
			.then(response => response as IProduct)
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);		// error for the caller
	}
}
