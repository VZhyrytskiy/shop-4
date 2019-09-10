import { Injectable } from '@angular/core';
import {
	Router,
	Resolve,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	UrlTree
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { IProduct, Category } from '../product/product.model';
import { ProductService } from 'src/app/core/services/product.service';
import { map, catchError, take } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class ProductResolveGuard implements Resolve<IProduct | null> {
	constructor(
		private productService: ProductService,
		private router: Router,
	) {}

	resolve(route: ActivatedRouteSnapshot): Observable<IProduct> {
		console.log('ProductResolveGuard is called');
		const emptyProduct: IProduct = {
			id: null,
			name: '',
			description: '',
			price: null,
			category: Category.Mathematics,
			isAvailable: false,
			authors: [],
		};

		if (!route.paramMap.has('productID')) {
			return of(emptyProduct);
		}

		const id = +route.paramMap.get('productID');

		return this.productService.getProducts().pipe(
			map((products: IProduct[]) => {
				if (products) {
					return products.find(item => item.id === id);
				} else {
					this.router.navigate(['/products']);
					return null;
				}
			}),
			take(1),
			catchError(() => {
				this.router.navigate(['/products']);
				// catchError MUST return observable
				return of(null);
			}),
		);
	}
}
