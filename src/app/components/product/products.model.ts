export enum Category {
	Mathematics,
	Physics,
	Biology,
	Literature,
	Chemistry,
	Programming,
}

export interface IProduct {
	name: string;
	description: string;
	price: number;
	category: Category;
	isAvailable: boolean;
	authors: string[];
}
