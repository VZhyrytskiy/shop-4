import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsService {

	appDetails: object = { App: 'BooksManager', Ver: '1.0' };

	constructor() {}
}
