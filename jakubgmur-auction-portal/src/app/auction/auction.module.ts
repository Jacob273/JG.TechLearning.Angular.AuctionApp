import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuctionRoutingModule } from './auction-routing.module';
import { AuctionsSiteComponent } from './auctions-site/auctions-site.component';
import { AuctionItemCardComponent } from './auction-item-card/auction-item-card.component';
import { PromotionsSiteComponent } from './promotions-site/promotions-site.component';


@NgModule({
  declarations: [AuctionsSiteComponent, AuctionItemCardComponent, PromotionsSiteComponent],
  imports: [
    CommonModule,
    AuctionRoutingModule
  ],
  exports: [
    AuctionsSiteComponent
  ]
})
export class AuctionModule { }
