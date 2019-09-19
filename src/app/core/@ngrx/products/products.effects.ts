import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ProductsActions from './products.actions';

import { Observable } from 'rxjs';
import { switchMap, pluck } from 'rxjs/operators';
import { ProductPromiseService } from '../../services/product-promise.service';

@Injectable()
export class ProductsEffects {
	constructor(
		private actions$: Actions,
		private productPromiseService: ProductPromiseService,
	) {
		console.log('[PRODUCTS EFFECTS]');
	}

	getProducts$: Observable<Action> = createEffect(() =>
		this.actions$.pipe(
			ofType(ProductsActions.getProducts),
			switchMap(action =>
				this.productPromiseService
					.getProducts()
					.then(products => ProductsActions.getProductsSuccess({ products }))
					.catch(error => ProductsActions.getProductsError({ error })),
			),
		),
	);

	getProduct$: Observable<Action> = createEffect(() =>
		this.actions$.pipe(
			ofType(ProductsActions.getProduct),
			pluck('productID'),
			switchMap(productID =>
				this.productPromiseService
					.getProduct(productID)
					.then(product => ProductsActions.getProductSuccess({ product }))
					.catch(error => ProductsActions.getProductError({ error })),
			),
		),
	);
}
