import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductService } from 'src/app/core/services/product.service';
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
		private productService: ProductService,
	) {}

	ngOnInit() {
		this.route.paramMap.pipe(
			switchMap((params: ParamMap) => {
				this.productId = +params.get('productID');
				return this.productService.getProducts();
			}),
		).subscribe(
			products => (this.product = products.filter(item => item.id === this.productId)[0]),
			err => console.log(err),
		);
	}

	onGoBack(): void {
		this.router.navigate(['/home']);
	}
}
