import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
	transform(value: any[], field: string, asc: boolean = false): any {
		return value.sort((a, b) => {
			if (a.hasOwnProperty(field)) {
				return asc ? a[field] - b[field] : b[field] - a[field];
			}
		});
	}
}
