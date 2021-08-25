import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceProductsService } from 'src/serviceProducts.service';
@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
})
export class ItemDetailComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ServiceProductsService
  ) {}

  async getProduct(id: any) {
    this.productService.getById(id).subscribe(res=> this.product = res)
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productoId = routeParams.get('idProduct');

    this.getProduct(productoId)
    console.log(this.product)
  }
}
