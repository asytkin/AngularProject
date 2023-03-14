import { Injectable } from '@angular/core';

import { Product } from '../model/product';
import { BasketItem } from '../model/basketitem';

import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private basketItems: BasketItem[] = [];
  private cartItemsCount$ = new BehaviorSubject<number>(0);
  private cartItemsCount: number = 0;

  /**
   * Adding product to basket
   *
   * @param product - product to add
   */
  addToCart(product: Product): void {
    if (this.basketItems.find((i) => i.item.id == product.id) == null) {
      let newBasketItem: BasketItem = {
        item: product,
        count: 1,
      };
      this.basketItems.push(newBasketItem);
      console.log(newBasketItem);
    } else {
      let basketItemSameId = this.basketItems.find(
        (i) => i.item.id == product.id
      );
      if (basketItemSameId != null) basketItemSameId.count++;
    }
    this.cartItemsCount++;
    this.cartItemsCount$.next(this.cartItemsCount);
  }

  /**
   * Basket items count
   */
  getCartCount() {
    return this.cartItemsCount$;
  }

  /**
   * Basket items price
   */
  getCartSum() {
    const sum: number = this.basketItems.reduce(
      (sum, currentBasketItem) =>
        sum + Number(currentBasketItem.item.price) * currentBasketItem.count,
      0
    );
    return of(sum == null ? 0 : sum);
  }

  /**
   * All basket items
   */
  getCartItems() {
    return this.basketItems;
  }
}
