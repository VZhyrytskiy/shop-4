import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { IProduct } from '../product/product.model';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.less'],
})
export class CartComponent implements OnInit {
	constructor(private cartService: CartService) {}
	productsInBasket: IProduct[];
	totalSum: number;

	ngOnInit() {
		this.productsInBasket = this.cartService.getProductsInBasket();
		this.totalSum = this.productsInBasket.reduce((sum, current) => sum + current.price, 0);
	}
}
