import { ProductsService } from './../../../shared/services/products.service';
import { seller } from './../../../shared/interfaces/seller';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.scss']
})
export class KidsComponent implements OnInit {

  manageKids: seller[] = [];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.manageKids = this.productsService.kids;
  }

}
