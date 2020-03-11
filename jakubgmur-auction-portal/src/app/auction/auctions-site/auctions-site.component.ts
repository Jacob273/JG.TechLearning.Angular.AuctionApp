import { Component, OnInit, OnDestroy, Input, Output } from '@angular/core';
import { AuctionItem } from '../auction-item';
import { AuctionsService } from '../auctions.service';
import { CartService } from './../cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auctions-site',
  templateUrl: './auctions-site.component.html',
  styles: []
})
export class AuctionsSiteComponent implements OnInit, OnDestroy {

    auctions: AuctionItem[] = [];
    private auctionService: AuctionsService;
    private cartService: CartService;
    private subscription: Subscription;
    searchText = '';

constructor(auctionService: AuctionsService, cartService: CartService) {
  this.auctionService = auctionService;
  this.cartService = cartService;
}

  ngOnInit(): void {
      this.subscription = this.auctionService.getAll()
      .subscribe((auctions: AuctionItem[]) => {
      this.auctions = auctions;
    }, (error: Error) => {
        console.log('Jest Blad');
    }, () => {
        console.log('Jest Ok.');
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    console.log('Destroyed and unsubscribed. Memory leak avoided!');
  }

  handleAddedToShoppinCart(eventArg: AuctionItem): void {
      this.cartService.addItem(eventArg);
  }

}
