import { Injectable } from '@angular/core';
import { AuctionItem } from './auction-item';

@Injectable({
  providedIn: 'root'
})
export class AuctionsService {

  constructor() { }

  getAll(): AuctionItem[] {
    return [{
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
    },
    {
      title: 'Wakacje',
      imgUrl: 'https://i.picsum.photos/id/100/200/200.jpg',
      description: 'Super wakacje!',
      price: 7300
    },
    {
      title: 'Koło',
      imgUrl: 'https://i.picsum.photos/id/99/200/200.jpg',
      description: 'Super koło do żuka!',
      price: 788
    },
    {
      title: 'Trawa',
      imgUrl: 'https://i.picsum.photos/id/98/200/200.jpg',
      description: 'Trawa do zasiania!',
      price: 70
    }];
  }
}
