import { Product } from './../../types';
import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Products } from '../../types';
import { ProductComponent } from '../components/product/product.component';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent,CommonModule,RatingModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(
    private productsService: ProductsService
  ){}

  products: Product[] = [];

  ngOnInit(){
    this.productsService.getProducts('http://localhost:3000/clothes', { page:0, perPage:5 }).subscribe((products: Products)=>{
      //console.log(products)
      this.products = products.items;
    })
  }
}
