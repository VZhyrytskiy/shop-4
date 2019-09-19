import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { IProduct } from '../product.model';

import { Store, select } from '@ngrx/store';
import { AppState, ProductsState } from 'src/app/core/@ngrx';
import * as ProductsActions from 'src/app/core/@ngrx/products/products.actions';
import { Observable, Subscription } from 'rxjs';

@Component({
	selector: 'app-product-review',
	templateUrl: './product-review.component.html',
	styleUrls: ['./product-review.component.less'],
})
export class ProductReviewComponent implements OnInit, OnDestroy {
	productId: number;
	product: IProduct;
	productsState$: Observable<ProductsState>;
	private sub: Subscription;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private store: Store<AppState>,
	) {}

	ngOnInit() {
		this.route.data.subscribe(data => console.log(data));

		// this.route.data.subscribe(data => {
		// 	this.product = data.product;
		// });

		this.route.paramMap.subscribe((data: ParamMap) => {
			this.productId = +data.get('productID');
		});

		// this.route.paramMap.pipe(
		// 	switchMap((params: ParamMap) => {
		// 		this.productId = +params.get('productID');
		// 		return this.productService.getProducts();
		// 	}),
		// ).subscribe(
		// 	products => (this.product = products.find(item => item.id === this.productId)),
		// 	err => console.log(err),
		// );

		this.productsState$ = this.store.pipe(select('products'));
		this.sub = this.productsState$.subscribe(productsState =>
				(this.product = { ...productsState.selectedProduct }),
		);

		this.route.paramMap.subscribe((data: ParamMap) => {
			const id = +data.get('productID');
			if (id) {
				this.store.dispatch(ProductsActions.getProduct({ productID: id }));
			}
		});
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}

	onGoBack(): void {
		this.router.navigate(['/home'], { relativeTo: this.route });
	}
}
