import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { FontDirective } from './directives/font.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { PathNotFoundComponent } from './components/path-not-found/path-not-found.component';

@NgModule({
	declarations: [HighlightDirective, FontDirective, OrderByPipe, PathNotFoundComponent],
	imports: [CommonModule],
	providers: [OrderByPipe],
	exports: [HighlightDirective, FontDirective],
})
export class SharedModule {}
