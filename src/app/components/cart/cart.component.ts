import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommunicatorService } from '../../core/services/communicator.service';
import { IProduct } from '../product/product.model';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.less'],
})
export class CartComponent implements OnInit, OnDestroy {
	productsInBasket: IProduct[];
	totalSum: number;
	private sub: Subscription;

	constructor(private communicatorService: CommunicatorService) {}

	ngOnInit() {
		this.sub = this.communicatorService.channel$.subscribe((data: IProduct[]) => {
			this.productsInBasket = data;
			this.totalSum = this.productsInBasket.reduce((sum, current) => sum + current.price, 0);
			return this.productsInBasket;
		});
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}
}
