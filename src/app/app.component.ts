import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAppConstants, ConstantsService } from './core/services/constants.service';
import { ReviewsService } from './core/services/reviews.service';

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

	appDetails: IAppConstants;

	constructor(
		public reviewsService: ReviewsService,
		private constantsService: ConstantsService,
		private router: Router,
	) { }

	ngOnInit() {
		this.appDetails = this.constantsService.appDetails;
	}

	ngAfterViewInit() {
		this.title.nativeElement.innerHTML = 'Welcome to the Book Shop!!!';
	}

	onDisplayReviews(): void {
		this.router.navigate([{outlets: {reviews: ['reviews']}}]);
		this.reviewsService.isDisplayed = true;
	}
}
