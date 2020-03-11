import { Component, OnInit } from '@angular/core';
import { CartService } from './../cart.service';
import { AuctionItem } from './../auction-item';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {


  cartItems: AuctionItem[];
  cartService: CartService;

  constructor(cartService: CartService) {
    this.cartService = cartService;
  }

  ngOnInit(): void {
    this.cartService.getItems()
      .subscribe((auctions: AuctionItem[]) => {
        this.cartItems = auctions;
      }, (error: Error) => {
        console.log('Jest Blad');
      }, () => {
        console.log('Jest Ok.');
      });
  }

}
