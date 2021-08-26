import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent{

  products: any = []

  constructor(private CartService: CartService) {
    this.products = this.CartService.cart;
  }

}