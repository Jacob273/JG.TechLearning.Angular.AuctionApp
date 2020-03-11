import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuctionsSiteComponent } from './auctions-site/auctions-site.component';
import { PromotionsSiteComponent } from './promotions-site/promotions-site.component';
import { ShoppingCartSiteComponent } from './shopping-cart-site/shopping-cart-site.component';
import { AddAuctionSiteComponent } from './add-auction-site/add-auction-site.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  { path: 'auctions', component: AuctionsSiteComponent },
  { path: 'promotions', component: PromotionsSiteComponent },
  { path: 'add-auction', component: AddAuctionSiteComponent, canActivate: [AuthGuard] },
  { path: 'shopping-cart', component: ShoppingCartSiteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuctionRoutingModule { }
