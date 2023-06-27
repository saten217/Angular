import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { color } from '../../types/types';
import { CartService } from 'src/app/cart/cart.service';
@Component({
  selector: 'App-pigeon',
  templateUrl: './pigeon.component.html',
  styleUrls: ['./pigeon.component.css']
})
export class PigeonComponent implements OnInit {
  @Input() color:color={} as color;
  
  isInCart: boolean=false;

  addToCart(){
    this.isInCart=true;
   this.cart.add(this.color);
  }

  removeFromCart(){
    this.isInCart=false;
   this.cart.remove(this.color);
  }

  constructor(private cart:CartService) { }

  ngOnInit(): void {
  }
  
}
