import { Injectable, Inject } from '@angular/core';
import {
	HttpClient,
	HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ProductsAPI } from 'src/app/components/product-list/products.config';
import { IProduct } from 'src/app/components/product-list/product/product.model';

@Injectable({
	providedIn: 'root',
})
export class ProductObservableService {
	constructor(
		private http: HttpClient,
		@Inject(ProductsAPI) private productsUrl: string, // link to http://localhost:3000/products
	) {}

	public getProducts(): Observable<IProduct[]> {
		return this.http.get<IProduct[]>(this.productsUrl).pipe(
			retry(2),
			catchError(this.handleError),
		);
	}

	private handleError(err: HttpErrorResponse) {
		// A client-side or network error occurred.
		if (err.error instanceof Error) {
			console.error('An error occurred:', err.error.message);
		} else {
			// The backend returned an unsuccessful response code.
			// The response body may contain clues as to what went wrong,
			console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
		}
		return throwError('Something bad happened; please try again later.');
	}
}
