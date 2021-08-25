import { Component, OnInit } from '@angular/core';
import { ServiceProductsService } from 'src/serviceProducts.service';
import {IProduct} from '../../models/Product';


@Component({
  selector: 'app-itemList',
  templateUrl: './itemList.component.html',
  styleUrls: ['./itemList.component.css']
})

export class ItemListComponent implements OnInit {

  aProducts: any  = [];

  constructor(
    private ServiceProductsService: ServiceProductsService
  ) { }

  getProducts(): void{
    this.ServiceProductsService.getAll()
    .subscribe(res => {
      console.log(res)
      this.aProducts = res
    })
  }
  ngOnInit() {
    this.getProducts()
    console.log(this.aProducts)
  }

}
