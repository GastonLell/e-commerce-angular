import { Component, Input, OnInit } from '@angular/core';

import { CartService } from '../../services/cart/cart.service';
import { IProduct } from 'src/app/models/Product';
@Component({
  selector: 'app-item-count',
  templateUrl: './item-count.component.html',
  styleUrls: ['./item-count.component.css']
})
export class ItemCountComponent implements OnInit {
  @Input() product: any;

  count = 1;

  constructor(  private CartService: CartService ) { }

  operacion(num: number){
    this.count += num
  }


  addToCart(): void{
    this.CartService.addToCart({...this.product, quanty: this.count});
    window.alert(`Agregaste ${this.product.title} al carrito`)
  }

  ngOnInit(): void {

  }

}
