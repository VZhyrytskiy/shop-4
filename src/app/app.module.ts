import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './components/products.module';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		CoreModule,
		SharedModule,
		ProductsModule,
		AppRoutingModule, // MUST BE LAST
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {
	constructor(router: Router) {
		const replacer = (key: string, value: any): string => typeof value === 'function' ? value.name : value;
		console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
	}
}
