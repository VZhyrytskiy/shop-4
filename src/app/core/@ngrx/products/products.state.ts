import { IProduct, Category } from 'src/app/components/product-list/product/product.model';

export interface ProductsState {
	data: ReadonlyArray<IProduct>;
}

export const initialProductsState: ProductsState = {
	data: [
		{
			id: 5129,
			name: 'High Matrematics',
			description: 'University Book for Study',
			price: 55,
			category: Category.Mathematics,
			isAvailable: false,
			authors: ['Pontryagin'],
		},
		{
			id: 4145,
			name: 'School Biology',
			description: 'School Book for Study',
			price: 24,
			category: Category.Biology,
			isAvailable: true,
			authors: ['Ivanov', 'Petrov'],
		},
		{
			id: 2552,
			name: 'Spectral Theory',
			description: 'Book for Science',
			price: 78,
			category: Category.Physics,
			isAvailable: true,
			authors: ['Sidorov'],
		},
		{
			id: 9629,
			name: 'Matrematics for Children',
			description: 'Children Literature',
			price: 30,
			category: Category.Mathematics,
			isAvailable: true,
			authors: ['Ignatiev', 'Nikiforov'],
		},
		{
			id: 8205,
			name: 'Chemistry',
			description: 'School Book for Study',
			price: 40,
			category: Category.Chemistry,
			isAvailable: false,
			authors: ['Petrovich', 'Sidorova'],
		},
		{
			id: 3914,
			name: 'Ng-Book',
			description: 'The Complete Book on Angular',
			price: 80,
			category: Category.Programming,
			isAvailable: true,
			authors: ['Nate Murray', 'Felipe Coury', 'Ari Lerner', 'Carlos Taborda'],
		},
	],
};
