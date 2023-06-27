import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
@Component({
  selector: 'App-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private CartService:CartService) { }

  ngOnInit(): void { }

  getcart()
  {
    return this.CartService.cart;
    }
  }
