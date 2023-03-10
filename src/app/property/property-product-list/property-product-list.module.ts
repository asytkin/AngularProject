import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyProductListComponent } from './property-product-list.component';
import { PropertyProductComponent } from '../property-product/property-product.component';
import { PropertyProductListRoutingModule } from './property-product-list-routing.module';

@NgModule({
  declarations: [PropertyProductListComponent, PropertyProductComponent],
  imports: [CommonModule, PropertyProductListRoutingModule],
  exports: [PropertyProductListComponent, PropertyProductComponent]
})

export class PropertyProductListModule { }
