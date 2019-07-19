import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { CommunicatorService } from '../../core/services/communicator.service';
import { IProduct } from './product/product.model';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.less'],
})
export class ProductListComponent implements OnInit {
	products: IProduct[];
	productsInBasket: IProduct[] = [];

	constructor(
		private productService: ProductService,
		private communicatorService: CommunicatorService,
	) {}

	ngOnInit() {
		this.products = this.productService.getProducts();
	}

	public onAddProductToBasket(product: IProduct): void {
		if (product.isAvailable) {
			this.productsInBasket.push(product);
		}
		console.log('onAddProductToBasket', this.productsInBasket);
	}

	public onClick(): void {
		this.communicatorService.publishData(this.productsInBasket);
	}
}
