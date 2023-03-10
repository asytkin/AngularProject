import { Component, Input } from '@angular/core';
import { Product } from 'src/app/httpservice/product';

@Component({
  selector: 'app-property-product',
  templateUrl: './property-product.component.html',
  styleUrls: ['./property-product.component.css']
})
export class PropertyProductComponent {


  @Input()
  product!: Product;

}
