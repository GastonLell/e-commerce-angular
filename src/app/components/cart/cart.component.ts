import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart/cart.service';
import { IProduct } from 'src/app/models/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit{

  products: IProduct[] = []

  deleteProduct(id: number): void{
    if(confirm('¿Seguro que desea eliminar el producto del carrito?')) {
      this.CartService.deleteItem(id)
      this.products = this.CartService.getCart();
    }
   
  }

  constructor(private CartService: CartService) {}

  ngOnInit(){
    this.products = this.CartService.cart;
  }

}
