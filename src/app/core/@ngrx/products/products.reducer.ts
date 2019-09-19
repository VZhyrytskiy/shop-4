import { Action, createReducer, on } from '@ngrx/store';
import { ProductsState, initialProductsState } from './products.state';
import * as ProductsActions from './products.actions';

export const productsFeatureKey = 'products';

const reducer = createReducer(
	initialProductsState,

	on(ProductsActions.getProducts, state => {
		console.log('GET_PRODUCTS action being handled!');
		return {
			...state,
			loading: true,
			loaded: false,
		};
	}),

	on(ProductsActions.getProductsSuccess, (state, props) => {
		console.log('GET_PRODUCTS_SUCCESS action being handled!');
		const data = [...props.products];
		return {
			...state,
			data,
			loading: false,
			loaded: true,
		};
	}),

	on(ProductsActions.getProductsError, (state, props) => {
		console.log('GET_PRODUCTS_ERROR action being handled!');
		const error = props.error;
		return {
			...state,
			loading: false,
			loaded: false,
			error,
		};
	}),

	on(ProductsActions.getProduct, state => {
		console.log('GET_PRODUCT action being handled!');
		return {
			...state,
			loading: true,
			loaded: false,
		};
	}),

	on(ProductsActions.getProductSuccess, (state, props) => {
		console.log('GET_PRODUCT_SUCCESS action being handled!');
		const selectedProduct = { ...props.product };
		return {
			...state,
			loading: false,
			loaded: true,
			selectedProduct,
		};
	}),

	on(ProductsActions.getProductError, (state, props) => {
		console.log('GET_PRODUCT_ERROR action being handled!');
		const error = props.error;
		return {
			...state,
			loading: false,
			loaded: false,
			error,
		};
	}),

	on(ProductsActions.getAvailableProducts, state => {
		console.log('GET_AVAILABLE_PRODUCTS action being handled!');
		const data = state.data.filter(t => t.isAvailable);
		return { ...state, data };
	}),

	on(ProductsActions.sortProducts, (state, props) => {
		console.log('SORT_PRODUCTS action being handled!', 'field: ' + props.field, 'asc: ' + props.asc);
		const data = [ ...state.data ];
		data.sort((a, b) => {
			if (a.hasOwnProperty(props.field)) {
				if (typeof a[props.field] === 'number' && typeof b[props.field] === 'number') {
					return props.asc ? a[props.field] - b[props.field] : b[props.field] - a[props.field];
				}
				if (typeof a[props.field] === 'string' && typeof b[props.field] === 'string') {
					return props.asc ? a[props.field].localeCompare(b[props.field]) : b[props.field].localeCompare(a[props.field]);
				}
			}
		});
		return { ...state, data };
	}),

	on(ProductsActions.removeAllProducts, state => {
		console.log('REMOVE_ALL_PRODUCTS action being handled!');
		const data = [];
		return { ...state, data };
	}),
);

export function productsReducer(state: ProductsState | undefined, action: Action) {
	return reducer(state, action);
}
