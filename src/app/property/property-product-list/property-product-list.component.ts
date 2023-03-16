import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { Product } from '../../model/product';
import { HttpFakeProductService } from '../../service/http.fakeproduct.service';

@Component({
  selector: 'app-property-product-list',
  templateUrl: './property-product-list.component.html',
  styleUrls: ['./property-product-list.component.css'],
})
export class PropertyProductListComponent {
  products: Product[] = [];
  cartService!: CartService;

  constructor(private httpFakeProductService: HttpFakeProductService) {
    this.httpFakeProductService.getAllProducts().subscribe((data) => {
      this.products = data;
      console.log('getAllProducts:' + data);
    });
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart(product);
    console.log('addToCart:' + product);
  }
}
