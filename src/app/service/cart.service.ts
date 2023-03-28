import { getItemsCount } from './../property/state/basket.reducer';
import { Action, AddItems, GetItems } from './../property/state/basket.actions';
import { Injectable } from '@angular/core';

import { Product } from '../model/product';
import { BasketItem } from '../model/basketitem';

import { BehaviorSubject, of, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as fromBasket from 'src/app/property/state/basket.reducer';


@Injectable({
  providedIn: 'root',
})
export class CartService {

  constructor(private store: Store<fromBasket.AppState>) { }
  /**
   * Adding product to basket
   *
   * @param product - product to add
   */
  addToCart(product: Product): void {
    this.store.dispatch(new AddItems({ item: product }));
  }

  /**
   * Basket items count
   */
  getCartCount() {
    return this.store.basketItems$.pipe(select(fromBasket.getItemsCount));
  }

  /**
   * Basket items price
   */
  getCartSum() {
    return this.store.basketItems$.pipe(select(fromBasket.getTotalSum));
  }

  /**
   * All basket items
   */
  getCartItems() {
    return this.store.basketItems$.pipe(select(fromBasket.getItems));
  }
}
