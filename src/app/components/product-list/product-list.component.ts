import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../product/products.service';
import { IProduct } from '../product/products.model';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.less'],
})
export class ProductListComponent implements OnInit {
	constructor(private productsService: ProductsService) {}
	books: IProduct[];

	ngOnInit() {
		this.books = this.productsService.getAllBooks();
	}
}
