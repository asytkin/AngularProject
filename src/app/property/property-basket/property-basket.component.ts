import { Component } from '@angular/core';
import { BasketItem } from 'src/app/model/basketitem';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-property-basket',
  templateUrl: './property-basket.component.html',
  styleUrls: ['./property-basket.component.css'],
})
export class PropertyBasketComponent {
  basketItems: BasketItem[] = [];
  cartService!: CartService;

  constructor() {
    this.basketItems = this.cartService.getCartItems();
  }
}
