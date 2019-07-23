import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
	constructor() {}

	setItem(key: string, value: any) {
		return localStorage.setItem(key, JSON.stringify(value));
	}

	getItem(key: string): any {
		return JSON.parse(localStorage.getItem(key));
	}

	removeItem(key: string) {
		return localStorage.removeItem(key);
	}
}
