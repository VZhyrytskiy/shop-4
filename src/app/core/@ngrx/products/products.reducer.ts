import { Action, createReducer, on } from '@ngrx/store';
import { ProductsState, initialProductsState } from './products.state';
import * as ProductsActions from './products.actions';

export const productsFeatureKey = 'products';

const reducer = createReducer(
	initialProductsState,
	on(ProductsActions.getProducts, state => {
		console.log('GET_PRODUCTS action being handled!');
		return { ...state };
	}),
	on(ProductsActions.getProduct, state => {
		console.log('GET_PRODUCT action being handled!');
		return { ...state };
	}),
	on(ProductsActions.deleteProduct, state => {
		console.log('DELETE_PRODUCT action being handled!');
		return { ...state };
	}),
);

export function productsReducer(state: ProductsState | undefined, action: Action) {
	return reducer(state, action);
}
