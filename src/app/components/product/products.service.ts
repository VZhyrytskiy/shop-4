import { Injectable } from '@angular/core';
import { Category, IProduct } from './products.model';

const books: IProduct[] = [
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
];

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  constructor() { }

  public getAllBooks(): IProduct[] {
	return books;
  }
}
