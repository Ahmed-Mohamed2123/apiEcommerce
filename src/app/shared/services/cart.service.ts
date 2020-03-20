import { seller } from './../interfaces/seller';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  carts: seller[] = [
    {src: 'https://via.placeholder.com/150/454443', Text: 'Cruise Dual Analog', price: 250, rate: 4, description: 'Tests', quantity: 5, total: 4, color: 'red', size: 'XL'},
    {src: 'https://via.placeholder.com/150/454443', Text: 'Cruise Dual Analog', price: 250, rate: 4, description: 'Tests', quantity: 5, total: 4, color: 'red', size: 'XL'},
    {src: 'https://via.placeholder.com/150/454443', Text: 'Cruise Dual Analog', price: 250, rate: 4, description: 'Tests', quantity: 5, total: 4, color: 'red', size: 'XL'},
  ];

  constructor() { }
}
