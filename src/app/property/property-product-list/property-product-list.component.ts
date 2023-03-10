import { Component, OnInit } from '@angular/core';
import { Product } from '../../httpservice/product';
import { HttpService } from '../../httpservice/http.service';

@Component({
  selector: 'app-property-product-list',
  templateUrl: './property-product-list.component.html',
  styleUrls: ['./property-product-list.component.css']
})
export class PropertyProductListComponent implements OnInit {
  itemsStub= [1,2,3,4,5,6];
  products: Product[]= [];


  constructor(private httpService: HttpService)
   {
     this.httpService.getAllProducts().subscribe(  data =>
     {
       this.products = data;
       console.log(data);
   }
   );
  }
  ngOnInit() {
    console.log('000');
    //console.log(fetch('https://fakestoreapi.com/products').then(res=>res.json()).then(json=>console.log(json)));
    //console.log(this.http.get<Product>('https://fakestoreapi.com/products/1'));

    console.log('2222');
    console.log(this.products);
  }
}
