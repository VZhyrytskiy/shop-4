import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../product.model';

@Component({
	selector: 'app-product-review',
	templateUrl: './product-review.component.html',
	styleUrls: ['./product-review.component.less'],
})
export class ProductReviewComponent implements OnInit {
	productId: number;
	product: IProduct;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
	) {}

	ngOnInit() {
		this.route.data.subscribe(data => console.log(data));

		this.route.data.subscribe(data => {
			this.product = data.product;
			this.productId = this.product.id;
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
	}

	onGoBack(): void {
		this.router.navigate(['/home'], { relativeTo: this.route });
	}
}
