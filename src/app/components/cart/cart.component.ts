import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommunicatorService } from '../../core/services/communicator.service';
import { CartService } from '../../core/services/cart.service';
import { IProduct, IComplexProduct } from '../product-list/product/product.model';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.less'],
})
export class CartComponent implements OnInit, OnDestroy {
	private sub: Subscription;
	input: IProduct[];

	constructor(
		private communicatorService: CommunicatorService,
		public cartService: CartService,
	) {}

	ngOnInit() {
		this.sub = this.communicatorService.channel$.subscribe((data: IProduct[]) => this.input = data);
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}

	public getComplexProduct(product: IProduct): IComplexProduct {
		return {
			product,
			amount: this.cartService.getAmountById(product.id),
		};
	}

	public onRemoveProductFromCart(productId: number): void {
		this.cartService.removeProductFromCart(productId);
	}

	public clearCart(): void {
		const resultOfConfirm = confirm('Delete all products from the basket?');
		if (resultOfConfirm) {
			this.cartService.clearCart();
		}
	}
}
