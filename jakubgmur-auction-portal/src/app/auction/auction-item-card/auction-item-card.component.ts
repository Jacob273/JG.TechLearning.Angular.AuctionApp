import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuctionItem } from '../auction-item';


@Component({
  selector: 'app-auction-item-card',
  templateUrl: './auction-item-card.component.html',
  styles: []
})
export class AuctionItemCardComponent {

@Input()  auction: AuctionItem;
@Output() addToCart = new EventEmitter<AuctionItem>();

  handleAddToCardClick() {
    this.addToCart.emit(this.auction);
  }

}
