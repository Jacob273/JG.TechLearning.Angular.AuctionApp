import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuctionItem } from '../auction-item';
import { AuctionsService } from '../auctions.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-auctions-site',
  template: `
    <section class="my-3 d-flex justify-content-between">
      <h2>Lista Naszych Aukcji</h2>
      <app-search-bar placeholderMessage="Szukaj wśród aukcji" (whenSearch)="titleFilter = $event"></app-search-bar>
    </section>
    <app-cart-items-count></app-cart-items-count>
    <section class="row">
      <div *ngIf="errorMessage" class="col-12 alert alert-danger">
        {{errorMessage}}
      </div>
      <div class="col-12 col-sm-6 col-md-4 col-lg-3" *ngFor="let myAuction of auctions | filterAuctions:titleFilter" >
        <app-action-card [auction]="myAuction" [canAddToCart]="true" (addToCart)="handleAddToCart($event)"  ></app-action-card>
      </div>
    </section>
  `,
  styles: []
})
export class AuctionsSiteComponent implements OnInit, OnDestroy {

  errorMessage = '';
  auctionSub: Subscription;
  auctions: AuctionItem[] = [];
  titleFilter = '';

  constructor(private auctionsService: AuctionsService, private cartService: CartService) { }

  handleAddToCart(auction: AuctionItem) {
    console.log(auction);
    this.cartService.addItem(auction);
  }

  ngOnInit(): void {
    this.auctionSub = this.auctionsService.getAll().subscribe((auctions: AuctionItem[]) => {
      this.auctions = auctions;
      // console.log('Aukcje przyszły !', auctions);
    }, (error: Error) => {
      this.errorMessage = error.message;
    }, () => {
      console.log('Aukcje Completed !');
    });

    // MOŻNA TEŻ JAKO OBIEKT W SUBSCRIBE:
    // this.auctionSub =  this.auctionsService
    //   .getAll()
    //   .subscribe(
    //     {
    //       next: (auctions: AuctionItem[]) => this.auctions = auctions,
    //       error: (error) => this.errorMessage = error.message,
    //       complete: () => console.log('Aukcje Completed !')
    //     }
    //   );

    // this.auctionsService.getAll().subscribe((auctions: AuctionItem[]) => {
    //   console.log('subskrybent 2', auctions);
    // });
    // this.auctionsService.getAll().subscribe((auctions: AuctionItem[]) => {
    //   console.log('subskrybent 3', auctions);
    // });
  }

  ngOnDestroy(): void {
    this.auctionSub.unsubscribe();
  }

}
