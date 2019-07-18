export enum Category {
	Mathematics = 'MATHEMATICS',
	Physics = 'PHYSICS',
	Biology = 'BIOLOGY',
	Literature = 'LITERATURE',
	Chemistry = 'CHEMISTRY',
	Programming = 'PROGRAMMING',
}

export interface IProduct {
	name: string;
	description: string;
	price: number;
	category: Category;
	isAvailable: boolean;
	authors: string[];
}

export const PRODUCTS: IProduct[] = [
	{
		name: 'High Matrematics',
		description: 'University Book for Study',
		price: 55,
		category: Category.Mathematics,
		isAvailable: false,
		authors: ['Pontryagin'],
	},
	{
		name: 'School Biology',
		description: 'School Book for Study',
		price: 24,
		category: Category.Biology,
		isAvailable: true,
		authors: ['Ivanov', 'Petrov'],
	},
	{
		name: 'Spectral Theory',
		description: 'Book for Science',
		price: 78,
		category: Category.Physics,
		isAvailable: true,
		authors: ['Sidorov'],
	},
	{
		name: 'Matrematics for Children',
		description: 'Children Literature',
		price: 30,
		category: Category.Mathematics,
		isAvailable: true,
		authors: ['Ignatiev', 'Nikiforov'],
	},
	{
		name: 'Chemistry',
		description: 'School Book for Study',
		price: 40,
		category: Category.Chemistry,
		isAvailable: true,
		authors: ['Petrovich', 'Sidorova'],
	},
];
