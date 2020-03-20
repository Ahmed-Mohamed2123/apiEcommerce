import { WomenComponent } from './shared/shared/layout/blank-layout/women/women.component';
import { InfoProductComponent } from './shared/shared/layout/blank-layout/info-product/info-product.component';
import { AccessoriesComponent } from './shared/shared/layout/blank-layout/accessories/accessories.component';
import { JewelleryComponent } from './shared/shared/layout/blank-layout/jewellery/jewellery.component';
import { KidsComponent } from './shared/shared/layout/blank-layout/kids/kids.component';
import { MenComponent } from './shared/shared/layout/blank-layout/men/men.component';
import { FooterComponent } from './shared/shared/layout/blank-layout/footer/footer.component';
import { NavbarComponent } from './shared/shared/layout/blank-layout/navbar/navbar.component';
import { SharedModule } from './shared/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './shared/shared/layout/blank-layout/home/home.component';

import { RatingModule, PaginationModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    WomenComponent,
    MenComponent, 
    KidsComponent, 
    JewelleryComponent, 
    AccessoriesComponent, 
    InfoProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RatingModule.forRoot(),
    PaginationModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
