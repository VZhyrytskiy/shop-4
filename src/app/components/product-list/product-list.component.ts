import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/product.service';
import { IProduct } from '../product/product.model';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.less'],
})
export class ProductListComponent implements OnInit {
	products: IProduct[];
	productsInBasket: IProduct[] = [];

	constructor(private productService: ProductService) {}

	ngOnInit() {
		this.products = this.productService.getProducts();
	}

	onAddProductToBasket(product: IProduct): void {
		if (product.isAvailable) {
			this.productsInBasket.push(product);
		}
		console.log(`onAddProductToBasket`, this.productsInBasket);
	}
}
