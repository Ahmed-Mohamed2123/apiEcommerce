import { AdminLayoutComponent } from './shared/shared/layout/admin-layout/admin-layout.component';
import { InfoProductComponent } from './shared/shared/layout/blank-layout/info-product/info-product.component';
import { UserLayoutComponent } from './shared/shared/layout/user-layout/user-layout.component';
import { AuthLayoutComponent } from './shared/shared/layout/auth-layout/auth-layout.component';
import { AccessoriesComponent } from './shared/shared/layout/blank-layout/accessories/accessories.component';
import { JewelleryComponent } from './shared/shared/layout/blank-layout/jewellery/jewellery.component';
import { KidsComponent } from './shared/shared/layout/blank-layout/kids/kids.component';
import { MenComponent } from './shared/shared/layout/blank-layout/men/men.component';
import { WomenComponent } from './shared/shared/layout/blank-layout/women/women.component';
import { HomeComponent } from './shared/shared/layout/blank-layout/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '', component: HomeComponent},
  {path: 'infoProduct', component: InfoProductComponent},
  {path: 'women', component: WomenComponent},
  {path: 'men', component: MenComponent},
  {path: 'kids', component: KidsComponent},
  {path: 'jewellery', component: JewelleryComponent},
  {path: 'accessories', component: AccessoriesComponent},
  {path: 'auth', component: AuthLayoutComponent, children: [
    {path: '', loadChildren: () => import('./views/authentication/authentication.module').then(m => m.AuthenticationModule)}
  ]},
  {path: 'user', component: UserLayoutComponent, children: [
    {path: '', loadChildren: () => import('./views/pages-user/pages-user.module').then(m => m.PagesUserModule)}
  ]},
  {path: 'admin', component: AdminLayoutComponent, children: [
    {path: '', loadChildren: () => import('./views/pages-admin/pages-admin.module').then(m => m.PagesAdminModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
