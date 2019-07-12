import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { IProduct } from '../product/products.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less'],
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }
  booksInBasket: IProduct[];

  ngOnInit() {
	this.booksInBasket = this.cartService.getProducts();
  }
}
