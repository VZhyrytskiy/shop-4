import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent, ManageProductsComponent } from './components';

const routes: Routes = [
	{
		path: 'admin',
		component: AdminComponent,
		children: [
			{
				path: '', // without component
				children: [
					{ path: 'products', component: ManageProductsComponent },
					{ path: '', component: AdminDashboardComponent },
				],
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AdminRoutingModule {
	static components = [
		AdminComponent,
		AdminDashboardComponent,
		ManageProductsComponent,
	];
}
