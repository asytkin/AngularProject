import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { BasketItem } from 'src/app/model/basketitem';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-property-basket',
  templateUrl: './property-basket.component.html',
  styleUrls: ['./property-basket.component.css'],
})
export class PropertyBasketComponent {
 public basketItems$!: Observable<BasketItem[]>;
  basketItemsSum: Observable<number> | undefined;

  constructor(private cartService: CartService) {
    this.basketItems$ = this.cartService.getCartItems();
    this.basketItemsSum = this.cartService.getCartSum();
  }
}
