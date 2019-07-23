import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { FontDirective } from './directives/font.directive';

@NgModule({
	declarations: [HighlightDirective, FontDirective],
	imports: [CommonModule],
	providers: [],
	exports: [HighlightDirective, FontDirective],
})
export class SharedModule {}
