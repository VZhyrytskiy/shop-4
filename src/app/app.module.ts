import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsService } from './components/product/products.service';
import { CartService } from './components/cart/cart.service';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
	declarations: [
		AppComponent,
		ProductComponent,
		ProductListComponent,
		CartComponent,
	],
	imports: [BrowserModule, AppRoutingModule],
	providers: [ProductsService, CartService],
	bootstrap: [AppComponent],
})
export class AppModule {}
