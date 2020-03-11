import { Component, OnInit } from '@angular/core';
import { AuctionItem } from '../auction-item';
import { AuctionsService } from '../auctions.service';
import { CartService } from './../cart.service';

@Component({
  selector: 'app-auctions-site',
  templateUrl: './auctions-site.component.html',
  styles: []
})
export class AuctionsSiteComponent implements OnInit {

    auctions: AuctionItem[];
    private auctionService: AuctionsService;
    private cartService: CartService;

constructor(auctionService: AuctionsService, cartService: CartService) {
  this.auctionService = auctionService;
  this.cartService = cartService;
}

  ngOnInit(): void {
      this.auctionService.getAll()
      .subscribe((auctions: AuctionItem[]) => {
      this.auctions = auctions;
    }, (error: Error) => {
        console.log('Jest Blad');
    }, () => {
        console.log('Jest Ok.');
    });
  }

  handleAddedToShoppinCart(eventArg: AuctionItem): void {
      this.cartService.addItem(eventArg);
  }

}
