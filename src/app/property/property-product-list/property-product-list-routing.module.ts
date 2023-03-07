import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyProductListComponent } from './property-product-list.component';

const routes: Routes = [{ path: '', component: PropertyProductListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyProductListRoutingModule { }
