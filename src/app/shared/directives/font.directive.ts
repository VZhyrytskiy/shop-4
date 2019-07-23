import { Directive, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
	selector: '[appFont]',
})
export class FontDirective {
	@Input() size: string;

	constructor(private el: ElementRef, private renderer: Renderer2) {}

	@HostListener('click') onClick() {
		this.setFont(this.size || '20px');
	}

	private setFont(size: string) {
		this.renderer.setStyle(this.el.nativeElement, 'fontSize', size);
	}
}
