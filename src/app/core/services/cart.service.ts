import { Injectable } from '@angular/core';
import { IProduct } from '../../components/product-list/product/product.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
	providedIn: 'root',
})
export class CartService {
	// поля и зависимость не используются?
	cartProducts: IProduct[];
	totalAmount: number;
	totalSum: number;

	constructor(private localStorageService: LocalStorageService) {}

	public getTotalAmount(products: IProduct[]): number {
		return products.length;
	}

	public getTotalSum(products: IProduct[]): number {
		return products.reduce((sum, current) => sum + current.price, 0);
	}
}
