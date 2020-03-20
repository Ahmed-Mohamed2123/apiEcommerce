import { ProductsService } from './../../../shared/services/products.service';
import { seller } from './../../../shared/interfaces/seller';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.scss']
})
export class MenComponent implements OnInit {

  manageMen: seller[] = [];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.manageMen = this.productsService.mens;
  }

}
