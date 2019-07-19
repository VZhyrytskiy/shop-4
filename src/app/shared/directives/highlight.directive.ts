import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
	selector: '[appHighlight]',
})
export class HighlightDirective {
	@HostBinding('style.backgroundColor') backgroundColor: string;

	@HostListener('mouseenter') onMouseEnter() {
		this.backgroundColor = 'yellow';
	}

	@HostListener('mouseleave') onMouseLeave() {
		this.backgroundColor = 'initial';
	}
}
