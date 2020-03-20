import { ProductsService } from './../../../shared/services/products.service';
import { seller } from './../../../shared/interfaces/seller';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.scss']
})
export class AccessoriesComponent implements OnInit {

  manageAccessories: seller[] = [];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.manageAccessories = this.productsService.accessories;
  }

}
