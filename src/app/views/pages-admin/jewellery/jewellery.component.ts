import { ProductsService } from './../../../shared/services/products.service';
import { seller } from './../../../shared/interfaces/seller';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jewellery',
  templateUrl: './jewellery.component.html',
  styleUrls: ['./jewellery.component.scss']
})
export class JewelleryComponent implements OnInit {

  manageJewellery: seller[] = [];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.manageJewellery = this.productsService.jewellery
  }

}
