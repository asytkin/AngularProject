import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyBasketRoutingModule } from './property-basket-routing.module';
import { PropertyBasketItemComponent } from '../property-basket-item/property-basket-item.component';
import { PropertyBasketComponent } from './property-basket.component';
import { StoreModule } from '@ngrx/store';
import { basketReducer } from 'src/app/property/state/basket.reducer';

@NgModule({
  declarations: [PropertyBasketComponent, PropertyBasketItemComponent],
  imports: [
    CommonModule,
    PropertyBasketRoutingModule,
    StoreModule.forFeature('basket', basketReducer)
  ],
  exports: [PropertyBasketComponent, PropertyBasketItemComponent],
})
export class PropertyBasketModule {}
