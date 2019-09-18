import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ProductsStoreModule } from './products/products-store.module';

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
		ProductsStoreModule,
	],
})
export class RootStoreModule {}
