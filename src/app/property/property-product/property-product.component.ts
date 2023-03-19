import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-property-product',
  templateUrl: './property-product.component.html',
  styleUrls: ['./property-product.component.css']
})
export class PropertyProductComponent {

  @Input()  product!: Product;
  @Output() onAddToCartEvent = new EventEmitter<Product>();

  onAddToCart() {
    this.onAddToCartEvent.emit(this.product);
  }

}
