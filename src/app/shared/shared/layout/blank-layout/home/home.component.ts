import { ProductsService } from './../../../../services/products.service';
import { seller } from './../../../../interfaces/seller';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bestSeller: seller[] = []

  featuredProducts: seller[] = []
  
  constructor(
    private productsService: ProductsService
  ) { 
    
  }

  ngOnInit(): void {
    this.bestSeller = this.productsService.bestSeller;
    this.featuredProducts = this.productsService.featuredProducts;
  }

}
