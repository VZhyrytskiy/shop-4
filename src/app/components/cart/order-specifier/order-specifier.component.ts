import { Component, OnInit, Inject } from '@angular/core';
import { GeneratorFactoryService } from '../../../core/services/generator-factory.service';
import { DATA_GEN, generator } from '../../../core/services/generator';

@Component({
	selector: 'app-order-specifier',
	templateUrl: './order-specifier.component.html',
	styleUrls: ['./order-specifier.component.less'],
	providers: [
		GeneratorFactoryService,
		{ provide: DATA_GEN, useFactory: generator(10), deps: [GeneratorFactoryService] },
	],
})
export class OrderSpecifierComponent implements OnInit {
	specifier: string;

	constructor(@Inject(DATA_GEN) private dataGen: string) {}

	ngOnInit() {
		this.specifier = `Specifier: ${this.dataGen}`;
	}
}
