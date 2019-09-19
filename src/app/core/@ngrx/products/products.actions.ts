import { createAction, props } from '@ngrx/store';

export const getProducts = createAction('[Product List] GET_PRODUCTS');

export const getAvailableProducts = createAction('[Product List] GET_AVAILABLE_PRODUCTS');

export const sortProducts = createAction(
	'[Product List] SORT_PRODUCTS',
	props<{ field: string, asc: boolean }>(),
);

export const removeAllProducts = createAction('[Cart] REMOVE_ALL_PRODUCTS');
