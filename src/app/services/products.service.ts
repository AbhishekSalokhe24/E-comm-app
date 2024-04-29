import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { PagignationParams, Products } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private apiService : ApiService) { }

  getProducts = (url:string, params:PagignationParams): Observable<Products> =>{
    return this.apiService.get(url,{
      params,
      responseType:'json',
    });
  }
}
