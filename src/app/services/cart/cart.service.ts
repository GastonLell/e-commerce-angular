import { Injectable, OnInit } from '@angular/core';
import {pipe} from 'rxjs';
import {filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: any = [];

  addToCart(product: any){
    
    this.cart = [...this.cart, product]
    
    console.log(this.cart)
  }

  constructor() { }
}
