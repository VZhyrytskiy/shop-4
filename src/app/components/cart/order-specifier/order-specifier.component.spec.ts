import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSpecifierComponent } from './order-specifier.component';

describe('OrderSpecifierComponent', () => {
	let component: OrderSpecifierComponent;
	let fixture: ComponentFixture<OrderSpecifierComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [OrderSpecifierComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(OrderSpecifierComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
