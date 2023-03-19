import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyBasketRoutingModule } from './property-basket-routing.module';
import { PropertyBasketItemComponent } from '../property-basket-item/property-basket-item.component';
import { PropertyBasketComponent } from './property-basket.component';

@NgModule({
  declarations: [PropertyBasketComponent, PropertyBasketItemComponent],
  imports: [CommonModule, PropertyBasketRoutingModule],
  exports: [PropertyBasketComponent, PropertyBasketItemComponent],
})
export class PropertyBasketModule {}
