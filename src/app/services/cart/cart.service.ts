import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/models/Product';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  constructor() { }

  cart: IProduct[] = [];

  addToCart(product: IProduct){
    this.cart = [...this.cart, product]
  }

  deleteItem(id: number){
    let newArray = this.cart.filter(product => product.id !== id)
    this.cart = newArray;
  } 

  getCart(){
    return this.cart;
  }
 
}