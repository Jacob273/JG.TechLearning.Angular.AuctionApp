import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuctionRoutingModule } from './auction-routing.module';
import { AuctionsSiteComponent } from './auctions-site/auctions-site.component';
import { AuctionItemCardComponent } from './auction-item-card/auction-item-card.component';
import { PromotionsSiteComponent } from './promotions-site/promotions-site.component';
import { FilterAuctionPipe } from './filter-auction.pipe';
import { AddAuctionSiteComponent } from './add-auction-site/add-auction-site.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AuctionCounterComponent } from './auction-counter/auction-counter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuctionsSiteComponent,
    AuctionItemCardComponent,
    PromotionsSiteComponent,
    FilterAuctionPipe,
    AddAuctionSiteComponent,
    ShoppingCartComponent,
    AuctionCounterComponent],
  imports: [
    CommonModule,
    AuctionRoutingModule,
    FormsModule
  ],
  exports: [
    AuctionsSiteComponent
  ]
})
export class AuctionModule { }
