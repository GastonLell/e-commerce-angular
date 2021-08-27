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
  
  constructor(
    private http: HttpClient
  ) { }

}
