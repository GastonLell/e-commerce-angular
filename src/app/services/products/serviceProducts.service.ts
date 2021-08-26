import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceProductsService {
  url: string = `https://fakestoreapi.com/products`;

  public getAll(){
    return this.http.get(this.url)
  }

  public getById(id:any){
    return this.http.get(`${this.url}/${id}`)
  }
  constructor(
    private http: HttpClient
  ) { }

}
