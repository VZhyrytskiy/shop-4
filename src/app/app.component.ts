import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less'],
})
export class AppComponent implements AfterViewInit {
	@ViewChild('appTitle', { static: false })
	title: ElementRef<HTMLElement>;

	ngAfterViewInit() {
		this.title.nativeElement.innerHTML = 'Welcome to the Book Shop!!!';
	}
}
