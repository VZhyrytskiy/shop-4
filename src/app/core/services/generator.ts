import { InjectionToken } from '@angular/core';
import { GeneratorFactoryService } from './generator-factory.service';

export const DATA_GEN = new InjectionToken<string>('DATA_GEN');

export function generator(length: number = 0) {
	return (generatorFactoryService: GeneratorFactoryService) => {
		return generatorFactoryService.generate(length);
	};
}
