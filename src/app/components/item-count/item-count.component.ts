import { Component, Input, OnInit } from '@angular/core';

import { CartService } from '../../services/cart/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-item-count',
  templateUrl: './item-count.component.html',
  styleUrls: ['./item-count.component.css']
})
export class ItemCountComponent implements OnInit {
  @Input() product: any;

  count = 1;

  constructor(  private CartService: CartService, private Router: Router ) { }

  operacion(num: number){
    this.count += num
  }


  addToCart(): void{
    this.CartService.addToCart({...this.product, quanty: this.count});
    window.alert(`Agregaste ${this.product.title} al carrito`)
    this.Router.navigate(['/'])
  }

  ngOnInit(): void {

  }

}
