import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from 'src/app/models/Product';

@Injectable({
  providedIn: 'root'
})

export class ServiceProductsService {
  url: string = `https://fakestoreapi.com/products`;

  public getAll(){
    return this.http.get<IProduct[]>(this.url)
  }

  public getById(id:any){
    return this.http.get<IProduct>(`${this.url}/${id}`)
  }
  public getCategories() {
    return this.http.get<string[]>('https://fakestoreapi.com/products/categories')
  }
  public getProductsByCategory(category: string){
    return this.http.get<IProduct[]>(`https://fakestoreapi.com/products/category/${category}`)
  }
  constructor(
    private http: HttpClient
  ) { }
}
