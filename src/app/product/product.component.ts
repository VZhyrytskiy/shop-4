import { Component, OnInit } from '@angular/core';

enum Category {
  Mathematics,
  Physics,
  Biology,
  Literature,
  Chemistry,
  Programming,
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less'],
})
export class ProductComponent implements OnInit {
  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;
  authors: string[];

  constructor() { }

  ngOnInit() {
	  this.name = 'ng-book';
	  this.description = 'The Complete Book on Angular';
	  this.price = 79;
	  this.category = Category.Programming;
	  this.isAvailable = true;
	  this.authors = ['Nate Murray', 'Felipe Coury', 'Ari Lerner', 'Carlos Taborda'];
  }

}
