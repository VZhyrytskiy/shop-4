import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicatorService } from './services/communicator.service';

@NgModule({
	declarations: [],
	imports: [CommonModule],
	providers: [
		CommunicatorService,
	],
})
export class CoreModule {}
