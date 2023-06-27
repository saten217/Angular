import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common';
import { ColorsService } from './colors/colors.service';
import { ColorsModule } from './colors/colors.module';
import { CartComponent } from './cart/cart.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [AppComponent, CartComponent],
  imports: [BrowserModule,AppRoutingModule,ColorsModule, AuthModule],
  providers: [DatePipe,ColorsService],
  bootstrap: [AppComponent],
})
export class AppModule { }
