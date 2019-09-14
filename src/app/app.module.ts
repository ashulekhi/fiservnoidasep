import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SignupComponent} from "./signup/signup.component";
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { CarouselComponent } from './carousel/carousel.component';
import { UsermodalComponent } from './usermodal/usermodal.component';
import { LoginComponent } from './login/login.component'
import {HttpClientModule} from "@angular/common/http"

import {CommonService} from "./common.service"
import {DiscountPipe} from "./discount.pipe"
import {HighlightDirective} from "./highlight.directive";
import { CartComponent } from './cart/cart.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { MainComponent } from './main/main.component'
import {RouteGuard} from "./routeguard.service"

@NgModule({
  declarations: [
    AppComponent, HighlightDirective ,DiscountPipe, SignupComponent, NavbarComponent, ProductComponent, CarouselComponent, UsermodalComponent, LoginComponent, ProductdetailComponent, MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CommonService, RouteGuard],
  bootstrap: [MainComponent]
})
export class AppModule { }
