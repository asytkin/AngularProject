import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
    providedIn: 'root'
  })

export class HttpService {
    url = 'https://fakestoreapi.com/products';

    constructor(private httpClient: HttpClient) { }

    getAllProducts():Observable<Product[]>{
        return this.httpClient.get<Product[]>(this.url);
    }
}
