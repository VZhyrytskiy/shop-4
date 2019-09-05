import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list.component';
import { CartComponent } from '../cart/cart.component';
import { CartItemComponent } from '../cart/cart-item/cart-item.component';
import { OrderSpecifierComponent } from '../cart/order-specifier/order-specifier.component';
import { AboutComponent } from '../about/about.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductReviewComponent } from './product/product-review/product-review.component';
import { ReviewsComponent } from '../reviews/reviews.component';
import { ProductsComponent } from './products.component';

@NgModule({
	declarations: [
		ProductComponent,
		ProductListComponent,
		ProductsComponent,
		CartComponent,
		CartItemComponent,
		OrderSpecifierComponent,
		AboutComponent,
		ProductReviewComponent,
		ReviewsComponent,
	],
	imports: [
		CommonModule,
		SharedModule,
		ProductsRoutingModule,
	],
	exports: [
		ProductListComponent,
		ProductsComponent,
		CartComponent,
		AboutComponent,
	],
})
export class ProductsModule {}
