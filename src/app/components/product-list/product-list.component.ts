import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CommunicatorService } from '../../core/services/communicator.service';
import { IProduct } from './product/product.model';
import { CartService } from '../../core/services/cart.service';
// import { OrderByPipe } from '../../shared/pipes/order-by.pipe';
import { ProductPromiseService } from '../../core/services/product-promise.service';
import { Store, select } from '@ngrx/store';
import { AppState, ProductsState } from 'src/app/core/@ngrx';
import * as ProductsActions from 'src/app/core/@ngrx/products/products.actions';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.less'],
})
export class ProductListComponent implements OnInit {
	products: IProduct[];
	availableProducts: IProduct[] = [];
	productsState$: Observable<ProductsState>;

	constructor(
		private router: Router,
		private productPromiseService: ProductPromiseService,
		private communicatorService: CommunicatorService,
		private cartService: CartService,
		// private orderBy: OrderByPipe,
		private store: Store<AppState>,
	) {}

	ngOnInit() {
		console.log('We have a store!!!', this.store);
		this.productsState$ = this.store.pipe(select('products'));
		this.store.dispatch(ProductsActions.getProducts());
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
		this.store.dispatch(ProductsActions.getAvailableProducts());
		this.communicatorService.publishData(this.availableProducts);
	}

	public sortProducts(field: string, asc: boolean = false) {
		// console.log('Sorting works!', 'field: ' + field, 'asc: ' + asc);
		// this.products = this.orderBy.transform(this.products, field, asc);
		this.store.dispatch(ProductsActions.sortProducts({ field, asc }));
	}
}
