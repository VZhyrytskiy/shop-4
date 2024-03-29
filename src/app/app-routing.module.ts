import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CartComponent } from './components/cart/cart.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PathNotFoundComponent } from './shared/components/path-not-found/path-not-found.component';
import { LoginComponent } from './shared/components/login/login.component';

const routes: Routes = [
	{
		path: 'home',
		component: ProductListComponent,
	},
	{
		path: 'about',
		component: AboutComponent,
	},
	{
		path: 'cart',
		component: CartComponent,
	},
	{
		path: 'reviews',
		component: ReviewsComponent,
		outlet: 'reviews',
	},
	{
		path: 'login',
		component: LoginComponent,
	},
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full',
	},
	{
		// The router will match this route if the URL requested
		// doesn't match any paths for routes defined in our configuration
		path: '**',
		component: PathNotFoundComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
