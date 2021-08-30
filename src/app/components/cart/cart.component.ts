import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart/cart.service';
import { IProduct } from 'src/app/models/Product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit{

  constructor(private CartService: CartService, private Router: Router) {}

  products: IProduct[] = []

  deleteProduct(id: number): void{
    if(confirm('¿Seguro que desea eliminar el producto del carrito?')) {
      this.CartService.deleteItem(id)
      this.products = this.CartService.getCart();
    }
  }

  ngOnInit(){
    this.products = this.CartService.cart;
  }

}
