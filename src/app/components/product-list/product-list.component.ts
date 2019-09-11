import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommunicatorService } from '../../core/services/communicator.service';
import { IProduct } from './product/product.model';
import { CartService } from '../../core/services/cart.service';
import { OrderByPipe } from '../../shared/pipes/order-by.pipe';
import { ProductPromiseService } from '../../core/services/product-promise.service';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.less'],
})
export class ProductListComponent implements OnInit {
	products: IProduct[];
	availableProducts: IProduct[] = [];

	constructor(
		private router: Router,
		private productPromiseService: ProductPromiseService,
		private communicatorService: CommunicatorService,
		private cartService: CartService,
		private orderBy: OrderByPipe,
	) {}

	ngOnInit() {
		this.productPromiseService.getProducts()
			.then((data: IProduct[]) => {
				this.products = data;
				console.log(this.products);
				return this.products;
			});
	}

	public onAddProductToCart(productId: number): void {
		this.cartService.addProductToCart(productId);
	}

	public onShowProductReview(productId: number): void {
		const link = ['/products/product', productId];
		this.router.navigate(link);
	}

	public onClick(): void {
		this.availableProducts = this.products.filter(el => el.isAvailable);
		this.communicatorService.publishData(this.availableProducts);
	}

	public sortProducts(field: string, asc: boolean) {
		console.log('Sorting works!', 'field: ' + field, 'asc: ' + asc);
		this.products = this.orderBy.transform(this.products, field, asc);
	}
}
