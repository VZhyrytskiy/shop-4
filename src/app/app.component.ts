import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ConstantsService } from './core/services/constants.service';

const details = new ConstantsService();

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less'],
	providers: [
		{ provide: ConstantsService, useValue: details },
	],
})
export class AppComponent implements OnInit, AfterViewInit {
	@ViewChild('appTitle', { static: false })
	title: ElementRef<HTMLElement>;

	appDetails: object;

	constructor(
		private constantsService: ConstantsService,
	) { }

	ngOnInit() {
		this.appDetails = this.constantsService.appDetails;
	}

	ngAfterViewInit() {
		this.title.nativeElement.innerHTML = 'Welcome to the Book Shop!!!';
	}
}
