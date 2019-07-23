import { Component, OnInit, Optional } from '@angular/core';
import { IConfig, ConfigOptionsService } from '../../core/services/config-options.service';
import { IAppConstants, ConstantsService } from '../../core/services/constants.service';
import { GeneratorFactoryService } from '../../core/services/generator-factory.service';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.less'],
})
export class AboutComponent implements OnInit {
	settings: Partial<IConfig>;
	appDetails: IAppConstants;
	specifier: string;

	constructor(
		@Optional() private configOptionsService: ConfigOptionsService,
		@Optional() private constantsService: ConstantsService,
		@Optional() private generatorFactoryService: GeneratorFactoryService,
	) {
		if (this.configOptionsService) {
				this.configOptionsService.setSettings({
				id: 555,
				login: 'anastminsk',
				email: 'anast-minsk@yandex.ru',
				isPrivileged: false,
			});
		}
	}

	ngOnInit() {
		this.settings = this.configOptionsService ? this.configOptionsService.getSettings() : {};
		console.log(this.settings);

		this.appDetails = this.constantsService ? this.constantsService.appDetails :
			{
				App: 'not found',
				Ver: 'not found',
			};

		this.specifier = this.generatorFactoryService ? this.generatorFactoryService.generate(20) :
			'GeneratorFactoryService not found!';
	}
}
