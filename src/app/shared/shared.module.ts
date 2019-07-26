import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { FontDirective } from './directives/font.directive';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
	declarations: [HighlightDirective, FontDirective, OrderByPipe],
	imports: [CommonModule],
	providers: [],
	exports: [HighlightDirective, FontDirective],
})
export class SharedModule {}
