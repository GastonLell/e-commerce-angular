import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ServiceProductsService } from '../../services/products/serviceProducts.service';

import {IProduct} from '../../models/Product';

@Component({
  selector: 'app-itemList',
  templateUrl: './itemList.component.html',
  styleUrls: ['./itemList.component.css']
})

export class ItemListComponent implements OnInit, OnDestroy {

  aProducts: any  = [];

  onDestroy$: Subject<boolean> = new Subject();

  constructor(
    private ServiceProductsService: ServiceProductsService
  ) {}

  getProducts(): void{
    this.ServiceProductsService.getAll()
    .pipe(takeUntil(this.onDestroy$))
    .subscribe(res => {
      this.aProducts = res
    })
  }

  ngOnInit() {
    this.getProducts()
  }

  ngOnDestroy(): void{
    this.onDestroy$.next(true)
  }
}
