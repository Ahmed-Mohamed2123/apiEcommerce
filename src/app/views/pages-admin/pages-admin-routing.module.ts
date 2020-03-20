import { OrdersComponent } from './orders/orders.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { JewelleryComponent } from './jewellery/jewellery.component';
import { KidsComponent } from './kids/kids.component';
import { MenComponent } from './men/men.component';
import { WomanComponent } from './woman/woman.component';
import { AddProductComponent } from './add-product/add-product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'addProduct', component: AddProductComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'managementWoman', component: WomanComponent},
  {path: 'managementMen', component: MenComponent},
  {path: 'managementKids', component: KidsComponent},
  {path: 'managementJewellery', component: JewelleryComponent},
  {path: 'managementAccessories', component: AccessoriesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesAdminRoutingModule { }
