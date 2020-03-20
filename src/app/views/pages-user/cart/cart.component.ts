import { seller } from './../../../shared/interfaces/seller';
import { CartService } from './../../../shared/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  carts: seller[] = [];

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.carts = this.cartService.carts;
  }

}
