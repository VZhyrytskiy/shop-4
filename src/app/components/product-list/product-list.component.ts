import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from '../../core/services/product.service';
import { IProduct } from './product/product.model';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.less'],
})
export class ProductListComponent implements OnInit, OnDestroy {
	products: IProduct[];
	private sub: Subscription;

	constructor(
		private productService: ProductService,
	) {}

	ngOnInit() {
		this.sub = this.productService.getProducts().subscribe((data: IProduct[]) => {
			this.products = data;
			console.log(this.products);
			return this.products;
		});
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}
}
