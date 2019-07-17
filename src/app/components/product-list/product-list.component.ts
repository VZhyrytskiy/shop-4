import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/product.service';
import { IProduct } from '../product/product.model';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.less'],
})
export class ProductListComponent implements OnInit {
	constructor(private productsService: ProductService) {}
	books: IProduct[];

	ngOnInit() {
		this.books = this.productsService.getAllBooks();
	}
}
