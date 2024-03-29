import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicatorService } from './services/communicator.service';
import { LocalStorageService } from './services/local-storage.service';
import { ConfigOptionsService } from './services/config-options.service';
import { ConstantsService } from './services/constants.service';
// import { GeneratorFactoryService } from './services/generator-factory.service';

@NgModule({
	declarations: [],
	imports: [CommonModule],
	providers: [
		CommunicatorService,
		LocalStorageService,
		ConfigOptionsService,
		ConstantsService,
		// GeneratorFactoryService,
	],
})
export class CoreModule {}
