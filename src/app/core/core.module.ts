import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicatorService } from './services/communicator.service';
import { LocalStorageService } from './services/local-storage.service';

@NgModule({
	declarations: [],
	imports: [CommonModule],
	providers: [
		CommunicatorService,
		LocalStorageService,
	],
})
export class CoreModule {}
