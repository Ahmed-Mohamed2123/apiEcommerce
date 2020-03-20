import { seller } from './../../../shared/interfaces/seller';
import { ProductsService } from './../../../shared/services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-woman',
  templateUrl: './woman.component.html',
  styleUrls: ['./woman.component.scss']
})
export class WomanComponent implements OnInit {

  manageWoman: seller[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.manageWoman = this.productsService.womens
  }

}
