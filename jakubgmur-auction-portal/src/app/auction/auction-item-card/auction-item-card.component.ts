import { Component, OnInit } from '@angular/core';
import { AuctionItem } from '../auction-item';


@Component({
  selector: 'app-auction-item-card',
  templateUrl: './auction-item-card.component.html',
  styles: []
})
export class AuctionItemCardComponent implements OnInit {

  auction: AuctionItem = {
      title: 'Części do aparatu',
      imgUrl: 'https://i.picsum.photos/id/36/200/200.jpg',
      description: 'To są super aparaty.',
      price: 2000
  };


  constructor() { }

  ngOnInit(): void {
  }

}
