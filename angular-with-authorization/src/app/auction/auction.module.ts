import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuctionRoutingModule } from './auction-routing.module';
import { AuctionsSiteComponent } from './auctions-site/auctions-site.component';
import { ActionCardComponent } from './action-card/action-card.component';
import { PromotionsSiteComponent } from './promotions-site/promotions-site.component';
import { AddAuctionSiteComponent } from './add-auction-site/add-auction-site.component';
import { ShoppingCartSiteComponent } from './shopping-cart-site/shopping-cart-site.component';
import { CartItemsCountComponent } from './cart-items-count/cart-items-count.component';
import { FilterAuctionsPipe } from './filter-auctions.pipe';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AuctionsSiteComponent,
    ActionCardComponent,
    PromotionsSiteComponent,
    AddAuctionSiteComponent,
    ShoppingCartSiteComponent,
    CartItemsCountComponent,
    FilterAuctionsPipe
  ],
  imports: [
    CommonModule,
    AuctionRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: [/*AuctionsService*/],
  exports: [/*AuctionsSiteComponent*/]
})
export class AuctionModule { }
