import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ProductsStoreModule } from './products/products-store.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './../../../environments/environment';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		StoreModule.forRoot({}, {
			runtimeChecks: {
				strictStateImmutability: true,
				strictActionImmutability: true,
				strictStateSerializability: true,
				strictActionSerializability: true,
			},
		}),
		// Instrumentation must be imported after importing StoreModule (config is optional)
		!environment.production ? StoreDevtoolsModule.instrument() : [],
		ProductsStoreModule,
	],
})
export class RootStoreModule {}
