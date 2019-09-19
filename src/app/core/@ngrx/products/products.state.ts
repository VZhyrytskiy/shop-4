import { IProduct, Category } from 'src/app/components/product-list/product/product.model';

export interface ProductsState {
	data: ReadonlyArray<IProduct>;
	readonly loading: boolean;
	readonly loaded: boolean;
	readonly error: Error | string;

}

export const initialProductsState: ProductsState = {
	data: [],
	loading: false,
	loaded: false,
	error: null,
};
