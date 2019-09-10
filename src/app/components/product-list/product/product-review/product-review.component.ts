import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductService } from 'src/app/core/services/product.service';
import { IProduct } from '../product.model';

@Component({
	selector: 'app-product-review',
	templateUrl: './product-review.component.html',
	styleUrls: ['./product-review.component.less'],
})
export class ProductReviewComponent implements OnInit, OnDestroy {
	productId: number;
	product: IProduct;
	private sub: Subscription;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private productService: ProductService,
	) {}

	ngOnInit() {
		this.sub = this.route.paramMap.pipe(
			switchMap((params: ParamMap) => {
				this.productId = +params.get('productID');
				return this.productService.getProducts();
			}),
		).subscribe(
			products => (this.product = products.find(item => item.id === this.productId)),
			err => console.log(err),
		);
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}

	onGoBack(): void {
		this.router.navigate(['/home'], { relativeTo: this.route });
	}
}
