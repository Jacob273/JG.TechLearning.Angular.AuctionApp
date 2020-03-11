import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AuctionItem } from '../auction-item';

@Component({
  selector: 'app-action-card',
  templateUrl: './action-card.component.html',
  styles: [],
  providers: [
    /*AuctionsService*/
  ]
})
export class ActionCardComponent {

  @Input() canAddToCart = true;
  @Input() auction: AuctionItem; /*= {} as AuctionItem;*/
  @Output() addToCart = new EventEmitter<AuctionItem>();

  // private cartService: CartService
  // constructor( ) { }
  handleCartClick() {
    // console.log(event);
    // this.auction.title = 'Hello !';
    this.addToCart.emit(this.auction);
  }
  // toJson(auction: AuctionItem): string {
  //   return JSON.stringify(auction);
  // }
}
