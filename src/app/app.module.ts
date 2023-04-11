import { NgModule } from '@angular/core';
import { NgFor } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CartService } from './service/cart.service';

import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { basketReducer } from 'src/app/property/state/basket.reducer';
import { reducers, metaReducers } from './store';
import { HydrationEffects } from './store/hydration/hydration.effects';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgFor,
    HttpClientModule,
    StoreModule.forFeature('items', basketReducer),
    EffectsModule.forRoot([HydrationEffects]),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
