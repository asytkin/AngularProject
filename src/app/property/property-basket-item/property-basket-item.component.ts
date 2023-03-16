import { Component, Input } from '@angular/core';
import { BasketItem } from 'src/app/model/basketitem';

@Component({
  selector: 'app-property-basket-item',
  templateUrl: './property-basket-item.component.html',
  styleUrls: ['./property-basket-item.component.css']
})
export class PropertyBasketItemComponent {
  @Input()
  basketItem!: BasketItem;
}
