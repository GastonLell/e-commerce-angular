import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//ver cuando usar
/* import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'; */

@Injectable({
  providedIn: 'root'
})
export class ServiceProductsService {
  url: string = `https://fakestoreapi.com/products`;

  public getAll(){
    return this.http.get(this.url)
  }

  public getById(id:any){
    console.log('id desde service', id)
    return this.http.get(`${this.url}/${id}`)
  }
  constructor(
    private http: HttpClient
  ) { }

}
