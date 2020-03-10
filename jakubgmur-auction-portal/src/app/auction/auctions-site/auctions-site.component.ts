import { Component, OnInit } from '@angular/core';
import { AuctionItem } from '../auction-item';

@Component({
  selector: 'app-auctions-site',
  templateUrl: './auctions-site.component.html',
  styles: []
})
export class AuctionsSiteComponent implements OnInit {

    auctions: AuctionItem[] = [  {
      title: 'Części do aparatu',
      imgUrl: 'https://i.picsum.photos/id/36/200/200.jpg',
      description: 'To są super aparaty.',
      price: 2000
  },
  {
    title: 'Tory',
    imgUrl: 'https://i.picsum.photos/id/233/200/200.jpg',
    description: 'To są super tory!',
    price: 2374
  }
];

  constructor() { }

  ngOnInit(): void {
  }

}
