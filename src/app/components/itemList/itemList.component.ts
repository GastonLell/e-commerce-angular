import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ServiceProductsService } from '../../services/products/serviceProducts.service';

import {IProduct} from '../../models/Product';

@Component({
  selector: 'app-itemList',
  templateUrl: './itemList.component.html',
  styleUrls: ['./itemList.component.css']
})

export class ItemListComponent implements OnInit, OnDestroy {

  aProducts: IProduct[] = [];
  categoryName: any = "";

  onDestroy$: Subject<boolean> = new Subject();

  constructor(
    private ServiceProductsService: ServiceProductsService,
    private route: ActivatedRoute
  ) {}

  getProducts(): void{
    this.ServiceProductsService.getAll()
    .pipe(takeUntil(this.onDestroy$))
    .subscribe(res => {
      this.aProducts = res
    })
  }

  getProductsById(category: string){
    this.ServiceProductsService.getProductsByCategory(category)
    .pipe(takeUntil(this.onDestroy$))
    .subscribe(res => {
      this.aProducts = res
    })
  }

  ngOnInit() {

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.categoryName = params.get('idCategory');
      if(this.categoryName){
        this.getProductsById(this.categoryName)
      }else {
        this.getProducts();
      }
    })
  }

  ngOnDestroy(): void{
    this.onDestroy$.next(true)
  }
}
