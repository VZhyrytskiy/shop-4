import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReviewsService } from 'src/app/core/services/reviews.service';
import { IProduct } from '../product-list/product/product.model';
import { ProductObservableService } from 'src/app/core/services/product-observable.service';

@Component({
	selector: 'app-reviews',
	templateUrl: './reviews.component.html',
	styleUrls: ['./reviews.component.less'],
})
export class ReviewsComponent implements OnInit {
	reviews: string[] = [];

	constructor(
		public reviewsService: ReviewsService,
		private productObservableService: ProductObservableService,
		private router: Router,
	) {}

	ngOnInit() {
		this.productObservableService.getProducts().subscribe((products: IProduct[]) => {
			products.forEach(product => this.reviews.push(`This is the ${product.description} with the category ${product.category}`));
		});
	}

	onClose() {
		this.router.navigate([{outlets: {reviews: null}}]);
		this.reviewsService.isDisplayed = false;
	}
}
