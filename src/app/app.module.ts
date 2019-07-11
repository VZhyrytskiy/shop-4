import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list/product-list.component';
import { ProductsService } from './components/product/products.service';

@NgModule({
  declarations: [AppComponent, ProductComponent, ProductListComponent],
	imports: [BrowserModule, AppRoutingModule],
  providers: [ProductsService],
  bootstrap: [AppComponent],
  })
  export class AppModule {}
