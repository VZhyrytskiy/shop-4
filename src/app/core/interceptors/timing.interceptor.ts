import { Injectable } from '@angular/core';
import {
	HttpEvent,
	HttpInterceptor,
	HttpHandler,
	HttpRequest,
	HttpResponse,
	HttpParams,
	HttpEventType
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable()
export class TimingInterceptor implements HttpInterceptor {
	intercept(
		req: HttpRequest<any>,
		next: HttpHandler,
	): Observable<HttpEvent<any>> {
		// request interceptor
		let clonedRequest;
		let startRequest: number;
		if (req.url.includes('products')) {
			clonedRequest = req.clone({
				params: new HttpParams().set('timing_interceptor', Date.now().toString()),
			});
			console.log(clonedRequest);
			startRequest = Date.now();
		} else {
			clonedRequest = req;
		}

		// response interceptor
		return next.handle(clonedRequest).pipe(
			filter((event: HttpEvent<any>) => event.type === HttpEventType.Response),
			map((event: HttpResponse<any>) => {
				// do stuff with response
				if (event.url.includes('products')) {
				const duration: number = Date.now() - startRequest;
				console.log(event);
				console.log(event.body);
				console.log(`Request took ${duration} ms`);
				}
				return event;
			}),
		);
	}
}
