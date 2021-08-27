import { Component, OnInit } from '@angular/core';
import { ServiceProductsService } from '../../services/products/serviceProducts.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  categories$!: Observable<string[]>;
  brand: string = "My ecommerce";
  
  constructor(
    private productService: ServiceProductsService,
  ) {}

  ngOnInit(){
    this.categories$ = this.productService.getCategories()
  }
}
