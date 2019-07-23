import { Injectable } from '@angular/core';

export interface IAppConstants {
	App: string;
	Ver: string;
}

@Injectable()
export class ConstantsService {

	appDetails: IAppConstants = { App: 'BooksManager', Ver: '1.0' };

	constructor() {}
}
