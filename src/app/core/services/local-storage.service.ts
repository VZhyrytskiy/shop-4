import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class LocalStorageService {
	constructor() {}

	setItem(key: string, value: any) {
		return localStorage.setItem(key, JSON.stringify(value));
	}

	getItem<T>(key: string): T {
		return JSON.parse(localStorage.getItem(key)) as T;
	}

	removeItem(key: string) {
		return localStorage.removeItem(key);
	}
}
