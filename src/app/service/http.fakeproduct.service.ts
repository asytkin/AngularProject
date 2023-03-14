import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpFakeProductService {
  url = 'https://fakestoreapi.com/products';

  constructor(private httpClient: HttpClient) {}

  /**
   * Get fake products
   */
  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.url);
  }
}
