import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'property-product-list',
    loadChildren: () =>
      import('./property/property-product-list/property-product-list.module').then(
        (m) => m.PropertyProductListModule
      ),
  },
  {
    path: 'property-basket',
    loadChildren: () =>
      import('./property/property-basket/property-basket.module').then(
        (m) => m.PropertyBasketModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
