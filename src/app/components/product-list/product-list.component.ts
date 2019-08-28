import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { CommunicatorService } from '../../core/services/communicator.service';
import { IProduct } from './product/product.model';
import { CartService } from '../../core/services/cart.service';
import { OrderByPipe } from '../../shared/pipes/order-by.pipe';

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
		private router: Router,
		private productService: ProductService,
		private communicatorService: CommunicatorService,
		private cartService: CartService,
		private orderBy: OrderByPipe,
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

	public onShowProductReview(productId: number): void {
		const link = ['/product', productId];
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
