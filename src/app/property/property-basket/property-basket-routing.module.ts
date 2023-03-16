import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyBasketComponent } from './property-basket.component';

const routes: Routes = [{ path: '', component: PropertyBasketComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PropertyBasketRoutingModule { }
