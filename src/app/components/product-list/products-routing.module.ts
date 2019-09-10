import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductReviewComponent } from './product/product-review/product-review.component';
import { ProductResolveGuard } from './guards/product-resolve.guard';

const routes: Routes = [
	{
		path: 'products',
		component: ProductsComponent,
		children: [
			{
				path: 'product/:productID',
				component: ProductReviewComponent,
				resolve: {
					product: ProductResolveGuard,
				},
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ProductsRoutingModule {}
