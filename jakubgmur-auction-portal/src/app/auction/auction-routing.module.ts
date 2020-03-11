import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuctionsSiteComponent } from './auctions-site/auctions-site.component';
import { PromotionsSiteComponent } from './promotions-site/promotions-site.component';
import { AddAuctionSiteComponent } from './add-auction-site/add-auction-site.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';


const routes: Routes = [
  {path: 'auctions', component: AuctionsSiteComponent},
  {path: 'promotions', component: PromotionsSiteComponent},
  {path: 'add-auction', component: AddAuctionSiteComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class AuctionRoutingModule { }
