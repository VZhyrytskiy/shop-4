import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ProductService } from '../../core/services/product.service';
import { CommunicatorService } from '../../core/services/communicator.service';
import { IProduct } from './product/product.model';
import { CartService } from '../../core/services/cart.service';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.less'],
})
export class ProductListComponent implements OnInit, OnDestroy {
	products: IProduct[];
	products$: Observable<IProduct[]>;
	availableProducts: IProduct[] = [];
	private sub: Subscription;

	constructor(
		private productService: ProductService,
		private communicatorService: CommunicatorService,
		private cartService: CartService,
	) {}

	ngOnInit() {
		this.products$ = this.productService.getProducts();
		this.sub = this.products$.subscribe((data: IProduct[]) => {
			this.products = data;
			console.log(this.products);
			return this.products;
		});
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}

	public onAddProductToCart(productId: number): void {
		this.cartService.addProductToCart(productId);
	}

	public onClick(): void {
		this.availableProducts = this.products.filter(el => el.isAvailable);
		this.communicatorService.publishData(this.availableProducts);
	}
}
