import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesUserRoutingModule } from './pages-user-routing.module';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';


@NgModule({
  declarations: [CartComponent, CheckoutComponent],
  imports: [
    CommonModule,
    PagesUserRoutingModule
  ]
})
export class PagesUserModule { }
