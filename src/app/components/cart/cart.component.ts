import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart/cart.service';
import { IProduct } from 'src/app/models/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent{

  products: IProduct[] = []

  deleteProduct(id: number): void{
    this.CartService.deleteItem(id)
    this.products = this.CartService.getCart();
  }

  constructor(private CartService: CartService) {
    this.products = this.CartService.cart;
  }

}
