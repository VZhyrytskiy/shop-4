import { Injectable } from '@angular/core';

export interface IConfig {
	id: number;
	login: string;
	email: string;
	isPrivileged: boolean;
}

@Injectable()
export class ConfigOptionsService {
	private config: Partial<IConfig> = {};

	constructor() {}

	setSettings(props: Partial<IConfig>) {
		const keys = Object.keys(props);
		keys.forEach(key => {
			this.config[key] = props[key];
		});
	}

	getSettings() {
		return this.config;
	}
}
