import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './product-list/product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';

@NgModule({
	declarations: [
		ProductComponent,
		ProductListComponent,
		CartComponent,
		CartItemComponent,
	],
	imports: [
		CommonModule,
		SharedModule,
	],
	exports: [
		ProductComponent,
		ProductListComponent,
		CartComponent,
	],
})
export class ProductsModule {}
