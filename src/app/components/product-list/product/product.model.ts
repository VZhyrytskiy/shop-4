export enum Category {
	Mathematics = 'MATHEMATICS',
	Physics = 'PHYSICS',
	Biology = 'BIOLOGY',
	Literature = 'LITERATURE',
	Chemistry = 'CHEMISTRY',
	Programming = 'PROGRAMMING',
}

export interface IProduct {
	id: number;
	name: string;
	description: string;
	price: number;
	category: Category;
	isAvailable: boolean;
	authors: string[];
}

export const PRODUCTS: IProduct[] = [
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
];
