import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ServiceProductsService } from 'src/serviceProducts.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
})

export class ItemDetailComponent implements OnInit, OnDestroy {

  product: any;

  onDestroy$: Subject<boolean> = new Subject()

  constructor(
    private route: ActivatedRoute,
    private productService: ServiceProductsService
  ) {
    
  }

  getProduct(id: any) {
    this.productService.getById(id)
    .pipe(takeUntil(this.onDestroy$))
    .subscribe(res=> this.product = res)
  }

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;

    const productoId = routeParams.get('idProduct');

    this.getProduct(productoId)

  }

  ngOnDestroy(): void{
    this.onDestroy$.next(true);
  }
}
