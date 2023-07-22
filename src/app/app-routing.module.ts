import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorsComponent } from './colors/colors.component';
import { PigeonComponent } from './colors/pigeon/pigeon.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = 
[{path:'', component:ColorsComponent},
  {path: 'colors', component: ColorsComponent},
{path: 'cart', component: CartComponent,canActivate:[AuthGuard]},
{path:'login', component:LoginComponent},
{path:'register', component:RegisterComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
