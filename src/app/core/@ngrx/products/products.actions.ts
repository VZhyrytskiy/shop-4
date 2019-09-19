import { createAction, props } from '@ngrx/store';
import { IProduct } from 'src/app/components/product-list/product/product.model';

export const getProducts = createAction('[Product List] GET_PRODUCTS');

export const getProductsSuccess = createAction(
	'[Products Effects] GET_PRODUCTS_SUCCEESS',
	props<{ products: IProduct[] }>(),
);

export const getProductsError = createAction(
	'[Products Effects] GET_PRODUCTS_ERROR',
	props<{ error: Error | string }>(),
);

export const getProduct = createAction(
	'[Product Review] GET_PRODUCT',
	props<{ productID: number }>(),
);

export const getProductSuccess = createAction(
	'[Products Effects] GET_PRODUCT_SUCCESS',
	props<{ product: IProduct }>(),
);

export const getProductError = createAction(
	'[Products Effects] GET_PRODUCT_ERROR',
	props<{ error: Error | string }>(),
);

export const getAvailableProducts = createAction('[Product List] GET_AVAILABLE_PRODUCTS');

export const sortProducts = createAction(
	'[Product List] SORT_PRODUCTS',
	props<{ field: string, asc: boolean }>(),
);

export const removeAllProducts = createAction('[Cart] REMOVE_ALL_PRODUCTS');
