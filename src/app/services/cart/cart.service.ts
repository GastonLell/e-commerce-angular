import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/models/Product';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  constructor() { }

  cart: IProduct[] = [];

  isInCart(id: number){
    return this.cart.some(product => product.id === id)
  }

  addToCart(product: IProduct){
    console.log(this.isInCart(product.id))

    if(this.isInCart(product.id)){

      this.cart = this.cart.map(productIterar => productIterar.id === product.id ? product : productIterar)

    }else {

      this.cart = [...this.cart, product];

    }
  }

  deleteItem(id: number){
    let newArray = this.cart.filter(product => product.id !== id)
    this.cart = newArray;
  } 

  getCart(){
    return this.cart;
  }
 
}