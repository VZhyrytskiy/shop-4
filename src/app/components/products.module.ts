import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product-list/product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
	declarations: [
		ProductComponent,
		ProductListComponent,
		CartComponent,
	],
	imports: [
		CommonModule,
	],
	exports: [
		ProductComponent,
		ProductListComponent,
		CartComponent,
	],
})
export class ProductsModule {}
