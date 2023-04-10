import { NgModule } from '@angular/core';
import { NgFor } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CartService } from './service/cart.service';

import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { basketReducer } from 'src/app/property/state/basket.reducer';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgFor,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('items', basketReducer),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
