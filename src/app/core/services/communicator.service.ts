import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IProduct } from '../../components/product/product.model';

@Injectable()
export class CommunicatorService {
	private channel = new Subject<IProduct[]>();
	public channel$ = this.channel.asObservable();

	constructor() {}

	public publishData(data: IProduct[]) {
		this.channel.next(data);
	}
}
