import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductReviewComponent } from './product/product-review/product-review.component';

const routes: Routes = [
	{
		path: 'home',
		component: ProductListComponent,
	},
	{
		path: 'product/:productID',
		component: ProductReviewComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ProductsRoutingModule {}
