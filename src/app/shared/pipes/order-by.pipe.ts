import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
	transform(value: any[], field: string, asc: boolean = false): any {
		return value.sort((a, b) => {
			if (a.hasOwnProperty(field)) {
				if (typeof a[field] === 'number' && typeof b[field] === 'number') {
					return asc ? a[field] - b[field] : b[field] - a[field];
				}
				if (typeof a[field] === 'string' && typeof b[field] === 'string') {
					return asc ? a[field].localeCompare(b[field]) : b[field].localeCompare(a[field]);
				}
			}
		});
	}
}
