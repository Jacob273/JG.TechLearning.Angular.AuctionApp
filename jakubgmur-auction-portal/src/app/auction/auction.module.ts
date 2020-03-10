import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuctionRoutingModule } from './auction-routing.module';
import { AuctionsSiteComponent } from './auctions-site/auctions-site.component';
import { AuctionItemCardComponent } from './auction-item-card/auction-item-card.component';
import { PromotionsSiteComponent } from './promotions-site/promotions-site.component';
import { FilterAuctionPipe } from './filter-auction.pipe';


@NgModule({
  declarations: [AuctionsSiteComponent, AuctionItemCardComponent, PromotionsSiteComponent, FilterAuctionPipe],
  imports: [
    CommonModule,
    AuctionRoutingModule
  ],
  exports: [
    AuctionsSiteComponent
  ]
})
export class AuctionModule { }
