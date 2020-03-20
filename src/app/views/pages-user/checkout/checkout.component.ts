import { Checkout } from './../../../shared/interfaces/checkout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  checkout: Checkout[] = [
    {product: 'Casual men wearing cool shoe x 1', total: 120},
    {product: 'Casual men wearing x 2', total: 280},
    {product: 'Subtotal', total: 400},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
