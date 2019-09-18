import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './components/product-list/products.module';
import { AdminModule } from './admin/admin.module';
import { ProductsAPIProvider } from './components/product-list/products.config';
import { httpInterceptorProviders } from './core/interceptors';
import { RootStoreModule } from './core/@ngrx/root-store.module';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		CoreModule,
		SharedModule,
		AdminModule,
		ProductsModule,
		RootStoreModule,
		AppRoutingModule, // MUST BE LAST
	],
	providers: [
		ProductsAPIProvider,
		httpInterceptorProviders,
	],
	bootstrap: [AppComponent],
})
export class AppModule {
	constructor(router: Router) {
		const replacer = (key: string, value: any): string => typeof value === 'function' ? value.name : value;
		console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
	}
}
