import { Injectable } from '@angular/core';
import { color } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 cart: color[]=[];

  constructor() { }

  add(color:color){
    this.cart.push(color);
    console.log(this.cart);
  }
  remove(color:color){
    this.cart=this.cart.filter(b=>b!=color);
  }
  getcart()
  {
    return this.cart;
  }
}
