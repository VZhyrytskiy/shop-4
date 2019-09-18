import { createAction, props } from '@ngrx/store';
import { IProduct } from 'src/app/components/product-list/product/product.model';

export const getProducts = createAction('[Products] GET_PRODUCTS');

export const getProduct = createAction(
	'[Products] GET_PRODUCT',
	props<{ productID: number }>(),
);

export const deleteProduct = createAction(
	'[Products] DELETE_PRODUCT',
	props<{ product: IProduct }>(),
);
