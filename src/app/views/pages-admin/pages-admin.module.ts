import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesAdminRoutingModule } from './pages-admin-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { WomanComponent } from './woman/woman.component';
import { MenComponent } from './men/men.component';
import { KidsComponent } from './kids/kids.component';
import { JewelleryComponent } from './jewellery/jewellery.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OrdersComponent } from './orders/orders.component';


@NgModule({
  declarations: [AddProductComponent, WomanComponent, MenComponent, KidsComponent, JewelleryComponent, AccessoriesComponent, OrdersComponent],
  imports: [
    CommonModule,
    PagesAdminRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PagesAdminModule { }
