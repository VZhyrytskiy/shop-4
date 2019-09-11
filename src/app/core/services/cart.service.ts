import { Injectable } from '@angular/core';
import { IProduct } from '../../components/product-list/product/product.model';
import { ProductPromiseService } from './product-promise.service';
import { LocalStorageService } from './local-storage.service';
import { Subscription } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class CartService {
	cartProducts: IProduct[];
	idsOfCartProducts: number[] = [];
	totalAmount: number;
	totalSum: number;

	constructor(
		private productPromiseService: ProductPromiseService,
		private localStorageService: LocalStorageService,
	) {
		this.idsOfCartProducts = this.localStorageService.getItem('productsIds') || [];
		this.updateCart();
	}

	public getAmountById(id: number): number {
		return this.idsOfCartProducts.filter(el => el === id).length;
	}

	public addProductToCart(id: number): void {
		this.idsOfCartProducts.push(id);
		this.localStorageService.setItem('productsIds', this.idsOfCartProducts);
		this.updateCart();
	}

	public removeProductFromCart(id: number): void {
		const index = this.idsOfCartProducts.indexOf(id);
		if (index > -1) {
			this.idsOfCartProducts.splice(index, 1);
			this.localStorageService.setItem('productsIds', this.idsOfCartProducts);
			this.updateCart();
		}
	}

	public clearCart(): void {
		this.idsOfCartProducts = [];
		this.localStorageService.setItem('productsIds', []);
		this.updateCart();
	}

	private updateCart(): void {
		this.productPromiseService.getProducts().then((data: IProduct[]) => {
			this.cartProducts = data.filter(product => this.idsOfCartProducts.indexOf(product.id) > -1);
			this.totalAmount = this.cartProducts.reduce((sum, current) => sum + this.getAmountById(current.id), 0);
			this.totalSum = this.cartProducts.reduce((sum, current) => sum + current.price * this.getAmountById(current.id), 0);
		});
	}
}
